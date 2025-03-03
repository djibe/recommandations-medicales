# Extract data for General Practitioners from Open Bio 2023

import pandas as pd
import json

# Charger le fichier CSV
df = pd.read_csv('OPEN_BIO_2023.CSV', sep=';', thousands='.', decimal=',')

# Supprimer les lignes contenant "forfait" dans la colonne "L_ACTE"
df = df[~df['L_ACTE'].str.contains('forfait|cotation minimale', case=False, na=False)]

# Filtrer les lignes où "PSP_SPE" = 1
df_filtered = df[df['PSP_SPE'] == 1]

# Fusionner les lignes identiques de la colonne "L_ACTE" en additionnant les valeurs des colonnes "DNB" et "REM"
df_grouped = df_filtered.groupby('L_ACTE').agg({
    'DNB': 'sum',
    'REM': 'sum'
}).reset_index()

# Trier le fichier par la colonne "REM" en ordre descendant
df_sorted = df_grouped.sort_values(by='REM', ascending=False)

# Arrondir les colonnes "DNB" et "REM" à l'entier le plus proche
df_sorted['DNB'] = df_sorted['DNB'].round()
df_sorted['REM'] = df_sorted['REM'].round()

df_sorted['DNB'] = df_sorted['DNB'].apply(lambda x: '{:,.0f}'.format(x).replace(',', '.'))
df_sorted['REM'] = df_sorted['REM'].apply(lambda x: '{:,.0f}'.format(x).replace(',', '.'))

# Enregistrer le résultat dans un nouveau fichier CSV (optionnel)
# df_sorted.to_csv('open-bio-filtered.csv', sep=';', encoding='utf-8', index=False)
# df_sorted.to_json('open-bio.json', orient='records')
# Convertir le DataFrame en dictionnaire
data_dict = df_sorted.to_dict(orient='records')

# Englober les données dans un objet "data"
json_data = {"data": data_dict}

# Enregistrer le résultat dans un fichier JSON
with open('open-bio-2023.json', 'w', encoding='utf-8') as f:
    json.dump(json_data, f, ensure_ascii=False, separators=(',', ':'))
print('\n Finished. open-bio-2023.json is available.')

# Afficher le résultat
print(df_sorted.head())
