import warnings

warnings.filterwarnings("ignore")
import joblib
import sys
import pandas as pd

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

df = pd.DataFrame(df,columns=['no_works','review_score','rating'])
df=df.fillna(0)



loaded_model = joblib.load('pymodel/rating_prediction_model.pkl','r')
predic=[]

if(len(df)>0):
    predicted_ratings = loaded_model.predict(df)
    for i, rating in enumerate(predicted_ratings):
        predic.append(rating)

    df_store['recomend_score']=predic
    df_store  = df_store.sort_values(by=['recomend_score','price'], ascending=[False,True])
    print(df_store.to_csv(index=False))
else:
    print(df_store.to_csv(index=False))


