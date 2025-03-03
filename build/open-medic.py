# Extract data for General Practitioners from Open Medic 2023

import pandas as pd
import json

# Charger le fichier CSV
df = pd.read_csv('OPEN_MEDIC_2023.CSV', sep=';', encoding='windows-1252')

# Modifier la colonne "REM": enlever les "." et remplacer la virgule "," par un point "."
df['REM'] = df['REM'].str.replace('.', '').str.replace(',', '.')
df['REM'] = pd.to_numeric(df['REM'])

# Filtrer les lignes où "PSP_SPE" = 1
df_filtered = df[df['PSP_SPE'] == 1]

print(df_filtered.head())
