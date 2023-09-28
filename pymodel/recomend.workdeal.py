import json
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
import pandas as pd
import warnings

warnings.filterwarnings("ignore")


with open("c:/Users/Sagar.Mulani/Dev/React/workdeal/pymodel/tempdata.json", 'r') as json_file:
    data_list_service = json.load(json_file)

data_df=pd.DataFrame(data_list_service)

print("\n-------- training data --------")
print(data_df)

X = np.array([data_df['average_price'], data_df['number_of_work'], data_df['review_score']]).T
y = np.array(data_df['rating'])

model = LinearRegression()
model.fit(X, y)

print("\n---------- coeficients used ---------")
print(model.coef_)

with open("c:/Users/Sagar.Mulani/Dev/Python/mongo_data.json", 'r') as json_file:
    data_list_service = json.load(json_file)

with open('c:/Users/Sagar.Mulani/Dev/Python/mongo_review.json', 'r') as json_file:
    data_list_review = json.load(json_file)

with open('c:/Users/Sagar.Mulani/Dev/Python/mongo_works.json', 'r') as json_file:
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

uid_counts = df_workd['uid'].value_counts()
df_uid_counts = pd.DataFrame(uid_counts)
df_uid_counts = df_uid_counts.rename(columns={'count': 'no_of_works'})


df_imp = pd.merge(df_service, df_review_imp, left_on='uid', right_on='uid', how='left')
df_imp = pd.merge(df_imp, df_uid_counts, left_on='uid', right_on='uid', how='left')


df_imp=df_imp[['uid','tag','price','no_of_works','Review_Score']]
df_imp['price']=df_imp['price'].fillna(0)
df_imp['no_of_works']=df_imp['no_of_works'].fillna(1)
df_imp['Review_Score']=df_imp['Review_Score'].fillna(1)



mean_price=df_imp['price'].mean()
mean_works=df_imp['no_of_works'].mean()
print(mean_price)
print(mean_works)

def assign_rating(row):
    if row['price'] <= mean_price*(2/3) and row['no_of_works'] >= mean_works and row['Review_Score'] >= 8:
        return 5 
    elif row['price'] <= mean_price and row['no_of_works'] >= mean_works*(3/5) and row['Review_Score'] >= 6:
        return 4 
    elif row['price'] <= mean_price*(9/8) and row['no_of_works'] >= mean_works*(1/2) and row['Review_Score'] >= 4:
        return 3 
    elif row['price'] <= mean_price*(9/6) and row['no_of_works'] >= mean_works*(1/4) and row['Review_Score'] >= 2:
        return 2 
    else:
        return 1

df_imp['Rating'] = df_imp.apply(assign_rating, axis=1)
print("\n--------- test data -----------")
print(df_imp)

X_test = np.array([df_imp['price'], df_imp['no_of_works'], df_imp['Review_Score']]).T
y_test = np.array(df_imp['Rating'])


y_pred = model.predict(X_test)
df_imp['prediction_rating']=y_pred
df_imp=df_imp.sort_values(by='tag',ascending=True)
print("\n------------- prediction -----------")
print(df_imp)

with open('predicted_data.json', 'w') as json_file:
    data_list_works = json.dump(json.loads(df_imp.to_json(orient='records')),json_file)
    
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)


print(f"Mean Squared Error: {mse:.2f}")
print(f"R-squared: {r2:.2f}")

import joblib

# Assuming 'model' is your trained model
joblib.dump(model, 'rating_prediction_model.pkl')

