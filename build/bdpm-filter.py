# Filter BDPM for Recomedicales by djibe and GPT4o
# TODO: Bind CIS, Poetry

import os
import requests
import pandas as pd
pd.options.mode.copy_on_write = True

# Download BDPM
response = requests.get('https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_bdpm.txt')
if response.status_code == 200:
    # Save the content to a file
    with open('CIS_bdpm.txt', 'wb') as file:
        file.write(response.content)
    print('BDPM downloaded successfully')
else:
    print('Failed to download file:', response.status_code)

current_dir = os.getcwd()
csv_path = os.path.join(current_dir, 'CIS_bdpm.txt')
df = pd.read_csv(csv_path, sep='\t', lineterminator='\r', encoding='windows-1252')

df.columns = ['cis', 'libelle', 'forme', 'voie', 'statut', 'procedure', 'commercialisation', 'date_amm', 'statut_bdm', 'autorisation', 'titulaire', 'surveillance']
df['cis'] = df['cis'].apply(lambda x: x.lstrip('\n') if isinstance(x, str) else x)

# Display the DataFrame
print("First rows")
print(df.head())

# Keep selected columns
df = df.loc[:, ['cis', 'libelle', 'forme', 'voie', 'procedure', 'commercialisation']]

# Apply filters
df.loc[df['procedure'] != 'Procédure centralisée', 'procedure'] = None
df.loc[df['procedure'] == 'Procédure centralisée', 'procedure'] = 'Yes'

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
# df_unique = df_unique.drop(columns=['normalized_libelle'])

# Function to remove blank keys (columns with NaN values) from each row during JSON export
def row_filter(row):
    return row.dropna().to_dict()

# Select only the 'cis' and 'libelle' columns and save to a JSON file
df_to_save = df_unique[['cis', 'libelle', 'procedure']]
df_to_save.apply(row_filter, axis=1).to_json('bdpm-search.json', orient='records')
print('\n Finished')
