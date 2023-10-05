import json
from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb+srv://krutik:workdeal123@cluster0.ylkhmsk.mongodb.net/')
db = client['workdeal']  
collection = db['services']  

@app.route('/api/items', methods=['GET'])
def get_items():
    query={}
    if(request.args.get('location')!='0'):
        query['location']=request.args.get('location')
    if request.args.get('rating')!='0':
        query['rating']=int(request.args.get('rating'))
    if request.args.get('category')!='0':
        query['tag']=request.args.get('category')
    price=request.args.get('price')
    if price!='0':
        if(price=='500'):
            query['price']={"$lt": 500}
        elif(price=='-500'):
            query['price']={"$gt": 500,"$lt": 1000}
        elif(price=='-1000'):
            query['price']={"$gt": 1000,"$lt": 2000}
        elif(price=='-3000'):
            query['price']={"$gt": 2000,"$lt": 5000}


    
    items = list(collection.find(query))
    for item in items:
        item['_id'] = str(item['_id'])
    return  json.dumps(items)


if __name__ == '__main__':
    app.run( port=52225)