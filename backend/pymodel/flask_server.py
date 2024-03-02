
from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb+srv://krutik:workdeal123@cluster0.ylkhmsk.mongodb.net/')
db = client['workdeal']  
collection = db['services']  

@app.route('/data', methods=['GET'])
def get_items():
    query = {}

    location = request.args.get('location')
    if location and location != '0':
        query['location'] = location

    rating = request.args.get('rating')
    if rating and rating != '0':
        query['rating'] = int(rating)

    category = request.args.get('category')
    if category and category != '0':
        query['tag'] = category

    price = request.args.get('price')
    if price and price != '0':
        if price == '500':
            query['price'] = {"$lt": 500}
        elif price == '-500':
            query['price'] = {"$gt": 500, "$lt": 1000}
        elif price == '-1000':
            query['price'] = {"$gt": 1000, "$lt": 2000}
        elif price == '-3000':
            query['price'] = {"$gt": 2000, "$lt": 5000}

    items = list(collection.find(query))
    for item in items:
        item['_id'] = str(item['_id'])

    return jsonify(items)

if __name__ == '__main__':
    
    app.run(port=5002)
