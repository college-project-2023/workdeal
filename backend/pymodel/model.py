import json
import warnings

warnings.filterwarnings("ignore")
import joblib
import sys
import pandas as pd
import numpy as np
from pymongo import MongoClient

category = sys.argv[1]
price = sys.argv[2]
location = sys.argv[3]
rating = sys.argv[4]

import requests

query={'location':location,'rating':rating,'price':price,'category':category}


api_url = 'http://127.0.0.1:52225/api/items'

response = requests.get(api_url,params=query)

if response.status_code == 200:
    data = response.json() 
    


df_store = pd.DataFrame(data)
df = pd.DataFrame(data)

df = pd.DataFrame(df,columns=['price','no_works','review_score'])



loaded_model = joblib.load('pymodel/rating_prediction_model.pkl')
predic=[]

if(len(df)>0):
    predicted_ratings = loaded_model.predict(df)
    for i, rating in enumerate(predicted_ratings):
        predic.append(rating)

    df_store['recomend_score']=predic
    df_store  = df_store.sort_values(by='recomend_score', ascending=False)
    print(df_store.to_csv(index=False))
else:
    print(df_store.to_csv(index=False))


