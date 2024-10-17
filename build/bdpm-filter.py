# Filter BDPM for Recomedicales by djibe

import os
import requests
import pandas as pd
pd.options.mode.copy_on_write = True

# Download BDPM
urls = [
    'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_bdpm.txt',
    'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_COMPO_bdpm.txt'
]

print("Downloading BDPM ...")
for url in urls:
    # Get filename from URL
    filename = url.split('=')[-1]

    response = requests.get(url)

    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Le fichier {filename} a bien été téléchargé.")
    else:
        print(f"Échec du téléchargement du fichier {filename}.")

current_dir = os.getcwd()
csv_path = os.path.join(current_dir, 'CIS_bdpm.txt')
df = pd.read_csv(csv_path, sep='\t', lineterminator='\r', encoding='windows-1252')

df.columns = ['cis', 'libelle', 'forme', 'voie', 'statut', 'procedure', 'commercialisation', 'date_amm', 'statut_bdm', 'autorisation', 'titulaire', 'surveillance']
df['cis'] = df['cis'].apply(lambda x: x.lstrip('\n') if isinstance(x, str) else x)

csv2_path = os.path.join(current_dir, 'CIS_COMPO_bdpm.txt')
df2 = pd.read_csv(csv2_path, sep='\t', lineterminator='\r', encoding='windows-1252')

df2.columns = ['cis', 'designation', 'code', 'dci', 'dosage', 'ref', 'nature', 'liaison', 'other']
df2['cis'] = df2['cis'].apply(lambda x: x.lstrip('\n') if isinstance(x, str) else x)

# Display the DataFrame
print("First rows")
print(df.head())

# Keep selected columns
df = df.loc[:, ['cis', 'libelle', 'forme', 'voie', 'procedure', 'commercialisation']]

# Apply filters
df.loc[df['procedure'] != 'Procédure centralisée', 'procedure'] = None
df.loc[df['procedure'] == 'Procédure centralisée', 'procedure'] = 'Yes'

df['libelle'] = df['libelle'].str.replace(r'(?i)\bPOUR CENT\b', '%', regex=True)
df2['dci'] = df2['dci'].str.replace(r'(?i)\bPOUR CENT\b', '%', regex=True)

unwanted_libelle_values = ["BOIRON", "COMPOSE", "VOMICA", "2CH", "3CH", "4CH", "6CH", "8CH"]
unwanted_voie_values = ["épilésionelle", "intraveineuse", "intrathécale", "intravesicale"]

df_filtered = df[
    (df['commercialisation'] == 'Commercialisée') &
    (~df['voie'].str.contains('|'.join(unwanted_voie_values), case=False, na=False)) &
    (~df['libelle'].str.contains('|'.join(unwanted_libelle_values), case=False, na=False))
]

# print('Filtered:')
# print(df_filtered.head())

# Filter duplicates
unwanted_words = [' ACCORD', ' AHCL', ' ALMUS', ' ALTER', ' ARROW', ' ARROW GENERIQUES', ' BGR', ' BIOGARAN', ' BLUEFISH', \
  ' CHAUVIN', ' CONSEIL', ' Conseil', ' CRISTERS', ' CRISTERS PHARMA', ' DIPHARMA', ' EG LABO', ' EG', ' EVOLUGEN', ' FRANCE', ' GEN.ORPH', ' GENERIQUES', ' GERDA', ' HCS', ' K.S', ' KRKA', \
  ' LAB', ' LABO', ' LABORATOIRES ALTER', ' MYLAN', ' NEURAXPHARM', ' NOR', ' PANPHARMA', ' PHARMA', ' QUIVER', ' REF', \
  ' SANDOZ', ' SANTE', ' SFDB', ' SUBSTIPHARM', ' SUN', ' TEVA', ' VIATRIS', ' VJ-PHARM', ' ZENTIVA', ' ZF', ' ZYDUS', \
  ' (rapport amoxicilline/acide clavulanique : 8/1)', ' (rapport amoxicilline/acide clavulanique: 8/1)', ' (Rapport Amoxicilline/Acide clavulanique : 8/1)', ' en flacon']

def normalize_libelle(libelle):
    for word in unwanted_words:
        libelle = libelle.replace(word, '')
    return libelle.strip()

# Apply normalization to create a new column for comparison
df_filtered['normalized_libelle'] = df_filtered['libelle'].apply(normalize_libelle)

# Drop duplicates based on the normalized 'libelle'
df_unique = df_filtered.drop_duplicates(subset='normalized_libelle')

# Update the original 'libelle' column to the normalized version
df_unique['libelle'] = df_unique['normalized_libelle']

# Drop the auxiliary column used for normalization
df_unique = df_unique.drop(columns=['normalized_libelle'])

# Merge CSVs
df_unique['dci'] = None
print("Add blank column")
print(df_unique.head())

df2_prioritized = df2.sort_values(by=['cis', 'nature'], key=lambda col: col != 'FT').drop_duplicates(subset='cis')
df_unique = df_unique.merge(df2_prioritized[['cis', 'dci']], on='cis', how='left')
df_unique.rename(columns={'dci_y': 'dci'}, inplace=True)

print("New DF")
print(df_unique.head())

# Function to remove blank keys (columns with NaN values) from each row during JSON export
def row_filter(row):
    return row.dropna().to_dict()

# Select only the 'cis', 'libelle', 'procedure' and 'dci' columns and save to a JSON file
df_to_save = df_unique[['cis', 'libelle', 'procedure', 'dci']]
df_to_save.apply(row_filter, axis=1).to_json('bdpm-search.json', orient='records')
print('\n Finished')
