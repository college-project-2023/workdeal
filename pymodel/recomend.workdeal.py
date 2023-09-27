import json
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
import pandas as pd

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
print(df_review_imp.head())

from textblob import TextBlob
import pandas as pd

keyword_scores = {
        'excellent':10,
        'outstanding':9,
        'exceptional':9,
        'professional':8,
        'knowledgeable':8,
        'skilled':8,
        'courteous':8,
        'friendly':8,
        'attentive':8,
        'poor':2,
        'without complaint':9,
        "doesn't know":2,
        "don't know":2,
        'responsive':8,
        'reliable':8,
        'efficient':8,
        'timely':8,
        'impressive':8,
        'exceptionally helpful':9,
        'went above and beyond':9,
        'pleased with the service':8,
        'highly recommend':9,
        'satisfied with the work':8,
        'great experience':9,
        'adequate':6,
        'satisfactory':6,
        'standard service':5,
        'met expectations':6,
        'as expected':6,
        'fair service':5,
        'did the job':5,
        'no complaints':6,
        'acceptable service':5,
        'just okay':5,
        'poor':2,
        'unprofessional':2,
        'incompetent':2,
        'rude':2,
        'disrespectful':2,
        'careless':2,
        'slow':2,
        'unreliable':2,
        'disorganized':2,
        'frustrating experience':3,
        'disappointed':3,
        'unsatisfactory':3,
        'subpar service':3,
        'not recommended':2,
        'regrettable':2,
        'mistakes were made':2,
        'love': 9,
        'works well': 7,
        'satisfied': 6,
        'good': 5,
        'ok': 4,
        'fine': 7,
        'best':8,
        'very fine':9,
        'not satisfied': 3,
        'bad': 2,
        'hate': 1,
        'terrible':2,
        'awful':3,
        'horrible':1,
        'disappointing':1,
        'regrettable':1,
        'frustrating':2,
        'unpleasant':4,
        'annoying':3,
        'irritating':2,
        'disliked':1,
        'hated':1,
        'complaint':2,
        'disgusting':2,
        'appalling':1,
        'abysmal':2,
        'wretched':3,
        'okay':5,
        'average':6,
        'fine':5,
        'decent':6,
        'tolerable':4,
        'acceptable':6,
        'neutral':5,
        'indifferent':4,
        'fair':5,
        'satisfactory':5,
        'excellent':10,
        'wonderful':9,
        'amazing':8,
        'fantastic':9,
        'outstanding':9,
        'impressive':8,
        'superb':9,
        'delightful':9,
        'pleasing':10,
        'great':8,
        'good':8,
        'love':9,
        'like':8,
        'enjoy':10,
        'recommend':10,
        'recommended':10,
    }




def sentiment_to_scale(text):
    sentiment_score = 0
    c=0
    good=0
    nutral=0
    bad=0
    for key,value in keyword_scores.items():
        if key in text:
            sentiment_score += value
            c+=1
            if sentiment_score>7:
                good+=1
            elif sentiment_score<4:
                bad+=1
            else:
                nutral+=1

    scaled_score = sentiment_score/c
    if good>bad and good>nutral and scaled_score<8:
        scaled_score+=2
    elif nutral>good and nutral>bad and scaled_score<5:
        scaled_score+=2
    elif scaled_score>5:
        scaled_score-=2
    
    return int(scaled_score)

df_review_imp['Review_Score'] = df_review_imp['review'].apply(sentiment_to_scale)
df_review_imp=df_review_imp.groupby('uid')['Review_Score'].agg(['mean']).reset_index()
df_review_imp=df_review_imp.rename(columns={'mean': 'Review_Score'})

uid_counts = df_workd['uid'].value_counts()
df_uid_counts = pd.DataFrame(uid_counts)
df_uid_counts = df_uid_counts.rename(columns={'count': 'no_of_works'})


df_imp = pd.merge(df_service, df_review_imp, left_on='uid', right_on='uid', how='left')
df_imp = pd.merge(df_imp, df_uid_counts, left_on='uid', right_on='uid', how='left')


df_imp=df_imp[['uid','tag','price','no_of_works','Review_Score']]
df_imp['price']=df_imp['price'].fillna(0)
df_imp['no_of_works']=df_imp['no_of_works'].fillna(0)
df_imp['Review_Score']=df_imp['Review_Score'].fillna(1)
df_imp=df_imp.dropna()

df_imp=df_imp[df_imp['tag'] == 'cook']


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
print(df_imp)

X = np.array([df_imp['price'], df_imp['no_of_works'], df_imp['Review_Score']]).T
y = np.array(df_imp['Rating'])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse:.2f}")
print(f"R-squared: {r2:.2f}")

import joblib

# Assuming 'model' is your trained model
joblib.dump(model, 'rating_prediction_model.pkl')

