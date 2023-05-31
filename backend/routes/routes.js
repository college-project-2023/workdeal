const express = require("express");
const fs = require('fs');
const servicesModel = require("../models/services")
const userModel = require("../models/search");
const userClientModel = require("../models/userdataclient")
const userWorkerModel = require("../models/userdataworker")
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const middleware = (request,response,next) => {
  console.log("middlew")
}

middleware();

app.post("/create-user-client", async (request,response) => {
  const signup = new userClientModel(request.body);
  try {
    await signup.save()
    response.send(signup)
  } catch (error){
    response.status(500).send(error);
  }
});
/*app.get("/servicejson", async (request,response) => {
  const servicejson = new services(request.body);
  try {
    await servicejson.save()
    response.send(servicedata)
  } catch (error){
    response.status(500).send(error);
  }
});*/
// server.js

// ...

app.get('/data', async (req, res) => {
  try {
   const {tag, location , price, rating} = req.query;
   const filter = {};
   if(tag){
    filter.tag = tag;
   }
   if(location){
    filter.location = location;
  }
  if(price){
    if(price == 500){
      filter.price = {
        $gte: 0,
       $lte: 500,
      };
      console.log(filter.price);
    }
    if(price == 2000-5000){
      filter.price = {
        $gte: 2000,
       $lte: 5000,
      };
      console.log(filter.price);
    }
    if(price == 500-1000){
      filter.price = {
        $gte: 500,
       $lte: 1000,
      };
      console.log(filter.price);
    }
    if(price == 1000-2000){
      filter.price = {
        $gte: 1000,
       $lte: 2000,
      };
      console.log(filter.price);
    }
  }
  if(rating){
    filter.rating = rating;
  }
  console.log(filter);
   servicesModel.find(filter).then((data)=>{
    console.log(data);
    res.json(data);
   }).catch((error)=>{
    res.send(error)
   })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});



app.post("/create-user-worker", async (request,response) => {
  const signup = new userWorkerModel(request.body);
  try {
    await signup.save()
    response.send(signup)
  } catch (error){
    response.status(500).send(error);
  }
});




app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;