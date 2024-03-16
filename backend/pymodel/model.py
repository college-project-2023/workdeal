import warnings
warnings.filterwarnings("ignore")  # Ignore warnings

import joblib
import pickle
import sys
import pandas as pd
import requests

# Check if correct number of command line arguments are provided
if len(sys.argv) != 5:
    print("Usage: python script.py category price location rating")
    sys.exit(1)

category = sys.argv[1]
price = sys.argv[2]
location = sys.argv[3]
rating = sys.argv[4]

# 'location': location,
query = { 'rating': rating, 'price': price, 'category': category, 'location':location}  # Corrected parameter name to match Node.js query

api_url = 'http://127.0.0.1:5002/data'  # Corrected API endpoint URL

try:
    response = requests.get(api_url, params=query)
   
   
    response.raise_for_status()  # Raise an error for unsuccessful responses
    data = response.json()
    
    if not data:
        print("No data returned from API")
        sys.exit(1)
except requests.exceptions.RequestException as e:
    print("Error fetching data from API:", e)
    sys.exit(1)

df_store = pd.DataFrame(data)
if df_store.empty:
    print("DataFrame is empty")
    sys.exit(1)

# Ensure the DataFrame contains the required columns for prediction
required_columns = ['no_works', 'review_score', 'rating']
if not all(col in df_store.columns for col in required_columns):
    print("Required columns missing in DataFrame")
    sys.exit(1)

df = df_store[required_columns].fillna(0)  # Select required columns and fill NaN values with 0
# print(df)

# import recomend_workdeal 
# print(df_store)
# df_store['recommend_score'] = recomend_workdeal.datamodel(df)
df_store = df_store.sort_values(by=['price'], ascending=[True])
print(df_store.to_csv(index=False))