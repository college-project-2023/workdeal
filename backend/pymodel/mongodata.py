import json
from pymongo import MongoClient

client = MongoClient('mongodb+srv://krutik:workdeal123@cluster0.ylkhmsk.mongodb.net/')

db_service = client['workdeal']
db_review = client['orders']

collection_service = db_service['services']
collection_review = db_review['review']
collection_works = db_review['works']

data_service = collection_service.find({})
data_review = collection_review.find({})
data_works = collection_works.find({})

data_list_service = list(data_service)
data_list_review = list(data_review)
data_list_works = list(data_works)

for item in data_list_service:
    item['_id'] = str(item['_id'])

for item in data_list_review:
    item['_id'] = str(item['_id'])

for item in data_list_works:
    item['_id'] = str(item['_id'])

with open('mongo_data.json', 'w') as json_file:
    json.dump(data_list_service, json_file)

with open('mongo_review.json', 'w') as json_file:
    json.dump(data_list_review, json_file)

with open('mongo_works.json', 'w') as json_file:
    json.dump(data_list_review, json_file)