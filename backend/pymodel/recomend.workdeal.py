import json
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
import pandas as pd
import warnings

warnings.filterwarnings("ignore")


with open("tempdata.json", 'r') as json_file:
    data_list_service = json.load(json_file)

data_df=pd.DataFrame(data_list_service)

def assign_rating(row):
    return  40/100*row['number_of_work']+25/100*row['review_score']+35/100*row['rating']

data_df['predict_rating'] = data_df.apply(assign_rating, axis=1)
data_df['predict_rating']=data_df['predict_rating']/max(data_df['predict_rating'])*10




b0=0
b2=0
b3=0
b4=0

def model_generate():
    mean_works = np.mean(data_df['number_of_work']) 
    mean_score = np.mean(data_df['review_score']) 
    mean_rating = np.mean(data_df['rating']) 
    mean_redict_rating = np.mean(data_df['predict_rating'])

    b2 = (np.sum((data_df['number_of_work'] - mean_works) * (data_df['predict_rating'] - mean_redict_rating)))/np.sum((data_df['number_of_work'] - mean_works) ** 2)
    b3 = (np.sum((data_df['review_score'] - mean_score) * (data_df['predict_rating'] - mean_redict_rating)))/np.sum((data_df['review_score'] - mean_score) ** 2)
    b4 = (np.sum((data_df['rating'] - mean_rating) * (data_df['predict_rating'] - mean_redict_rating)))/np.sum((data_df['rating'] - mean_rating) ** 2)

    b0=mean_redict_rating-(b2*mean_works+b3*mean_score+b4*mean_rating)/4
    
    prediction=b0+b2*data_df['number_of_work']+b3*data_df['review_score']+b4*data_df['rating']
    data_df['prediction_rating']=prediction
    data_df['prediction_rating']=data_df['prediction_rating']/max(data_df['prediction_rating'])*10
    return b0,b2,b3,b4

b0,b2,b3,b4=model_generate()

print("\n-------- training data --------")
print(data_df)

print("\n---------- coeficients used ---------")
print(b0,b2,b3,b4)

class customLinearRegression:
    def __init__(self, b0, b2, b3, b4):
        self.b0 = b0
        self.b2 = b2
        self.b3 = b3
        self.b4 = b4
        
    def predict(self,datalist):
        output=[]
        for i in datalist:
            output.append(b0+b2*i[0]+b3*i[1]+b4*i[2])
        m=max(output)
        for i in range(len(output)):
            output[i]=output[i]/m*10
        return output
        
customModel = customLinearRegression(b0,b2,b3,b4)

# print(predict([[20,8,4],[10,9,4],[15,1,1]]))


with open("mongo_data.json", 'r') as json_file:
    data_list_service = json.load(json_file)

with open('mongo_review.json', 'r') as json_file:
    data_list_review = json.load(json_file)

with open('mongo_works.json', 'r') as json_file:
    data_list_works = json.load(json_file)



df_service = pd.DataFrame(data_list_service)
df_review = pd.DataFrame(data_list_review)
df_workd = pd.DataFrame(data_list_works)


df_service.dropna()
df_review.dropna()

df_review_imp = df_review[['uid','review']]
print("Review data with uid")
print(df_review_imp)

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

def sentiment_to_scale(text):
    sentiment = analyzer.polarity_scores(text)
    sentiment_score = (sentiment["compound"] + 1) * 5
    sentiment_score = max(1, min(sentiment_score, 10))
    return sentiment_score


df_review_imp['Review_Score'] = df_review_imp['review'].apply(sentiment_to_scale)
df_review_imp=df_review_imp.groupby('uid')['Review_Score'].agg(['mean']).reset_index()
df_review_imp=df_review_imp.rename(columns={'mean': 'Review_Score'})

print("\n--------- scored review ---------------- ")
print(df_review_imp)

uid_counts = df_workd['uid'].value_counts().reset_index()
df_uid_counts = pd.DataFrame(uid_counts)

df_uid_counts.columns = ['uid', 'no_of_works']
# print(df_uid_counts)


df_imp = pd.merge(df_service, df_review_imp, left_on='uid', right_on='uid', how='left')

print(df_uid_counts.head())
df_imp = pd.merge(df_imp, df_uid_counts, left_on='uid', right_on='uid', how='left')



df_imp=df_imp[['uid','tag','price','no_of_works','Review_Score','rating']]
df_imp['price']=df_imp['price'].fillna(100)
df_imp['no_of_works']=df_imp['no_of_works'].fillna(1)
df_imp['Review_Score']=df_imp['Review_Score'].fillna(1)
df_imp['rating']=df_imp['rating'].fillna(1)



mean_price=df_imp['price'].mean()
mean_works=df_imp['no_of_works'].mean()

print("\n--------- test data -----------")
print(df_imp)


def assign_rating_test(row):
    return 20/100*row['no_of_works']+35/100*row['Review_Score']+45/100*row['rating']

df_imp['to_predict_rating'] = df_imp.apply(assign_rating_test, axis=1)
df_imp['to_predict_rating']=df_imp['to_predict_rating']/max(df_imp['to_predict_rating'])*10

X_test = np.array([df_imp['no_of_works'], df_imp['Review_Score'],df_imp['rating']]).T
y_test = np.array(df_imp['to_predict_rating'])



df_imp['prediction_rating']=customModel.predict(X_test)

df_imp['prediction_rating']=df_imp['prediction_rating']/max(df_imp['prediction_rating'])*10

mse = mean_squared_error(y_test, df_imp['prediction_rating'])
r2 = r2_score(y_test, df_imp['prediction_rating'])


df_imp=df_imp.sort_values(by='prediction_rating',ascending=False)
print("\n------------- prediction -----------")
print(df_imp)

with open('predicted_data.json', 'w') as json_file:
    data_list_works = json.dump(json.loads(df_imp.to_json(orient='records')),json_file)
    

print(f"Mean Squared Error: {mse:.2f}")
# print(f"R squared error:{r2:.2f}")


import joblib

joblib.dump(customModel, 'backend/pymodel/rating_prediction_model.pkl')

