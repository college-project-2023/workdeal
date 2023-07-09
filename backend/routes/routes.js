const express = require("express");
const fs = require('fs');
const servicesModel = require("../models/services")
const userModel = require("../models/search");
const userClientModel = require("../models/users/userdataclient");
const userWorkerModel = require("../models/users/userdataworker");
const OrderWorker = require("../models/orders/workers");
const CurrentOrderWorker = require("../models/orders/currentOrder");
const OrderClient = require("../models/orders/client")
const BlogData = require("../models/blog-data")
const app = express();
const cookieParser = require("cookie-parser");
const admin = require("../firebase-config");
var crypto = require("crypto-js");
const { response } = require("express");
const { default: mongoose } = require("mongoose");
app.use(cookieParser());
app.use(express.json());

var loggedin = false;

async function middleware(request, response, next) {
  loggedin = request.body.idtoken;
  if (loggedin != "false" && loggedin != undefined) {
    try {
      const verified = await admin.auth().verifyIdToken(loggedin);
      if (verified) {
        next();
      } else {
        response.status(400).send({message:'expired1'});
        console.log('1')
      }
    } catch (error) {
      response.status(400).send({message:'expired2'});
      console.log(error)
    }
  } else {
    response.status(400).send({message:'expired3'});
    console.log('3')
  }
}


app.post("/create-user-client", async (request, response) => {
  const signup = new userClientModel(request.body);
  try {
    await signup.save();
    response.send(signup);
  } catch (error) {
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
   if(tag!=""){
    filter.tag = tag.toLowerCase();
    console.log(tag);
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



app.post("/create-user-worker", async (request, response) => {
  const signup = new userWorkerModel(request.body);
  try {
    await signup.save();
    response.send(signup);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post(`/get-user-data/`, middleware,async (req, res) => {
  const worker = new userWorkerModel(req.body);
  const client = new userClientModel(req.body);
  const userid = req.body.uid;
  worker.collection.findOne({ uid: userid }, function (error, data) {
    if (error) {
      client.collection.findOne({ uid: userid }, function (error, data) {
        if (error) {
          res.status(404).send({message:'user not found'});
        } else {
          res.send(data);
        }
      });
    } else {
      if (data == null) {
        client.collection.findOne({ uid: userid }, function (error, data) {
          if (error) {
            res.status(404).send({message:'user not found'});
          } else {
            if (data != null) {
              res.send(data);
            } else {
              res.status(404).send({message:'user not found'});
            }
          }
        });
      } else {
        res.send(data);
      }
    }
  });
});

app.post(`/update-user-worker/`, async (req, res) => {
  const user = new userWorkerModel(req.body);
  try {
    const newdoc = await user.collection.findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          uid: req.body.uid,
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          mobile: req.body.mobile,
          address: req.body.address,
          city: req.body.addrcity,
          zipcode: req.body.zipcode,
          statename: req.body.addrstatename,
          country: req.body.addrcountry,
          typeofacc: "worker",
          service: req.body.service,
        },
      }
    );
    response.send(newdoc);
  } catch (error) {
    res.send(error);
  }
});

app.post(`/update-user-client`, async (req, res) => {
  const user = new userClientModel(req.body);
  try {
    const newdoc = await user.collection.findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          uid: req.body.uid,
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          mobile: req.body.mobile,
          address: req.body.address,
          address2: req.body.address2,
          city: req.body.addrcity,
          zipcode: req.body.zipcode,
          statename: req.body.addrstatename,
          country: req.body.addrcountry,
          typeofacc: "client",
        },
      }
    );
    response.send(newdoc);
  } catch (error) {
    res.send(error);
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

app.get(`/get-orders-worker/:uid`, async (req, res) => {
  const userid = req.params.uid;

  OrderWorker.find({ uid: userid })
    .then((workers) => {
      res.json(workers);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get(`/get-orders-client/:uid`, async (req, res) => {
  const userid = req.params.uid;

  OrderClient.find({ uid: userid })
    .then((workers) => {
      res.json(workers);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get(`/get-current-work/:uid`, async (req, res) => {
  const userid = req.params.uid;

  CurrentOrderWorker.findOne({ uid: userid })
    .then((workers) => {
      res.json(workers);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/set-current-work", async (request, response) => {
  const user = new CurrentOrderWorker(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/delete-current-work", async (req, res) => {
  CurrentOrderWorker.deleteOne({ uid: req.body.uid })
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/delete-service-work", async (req, res) => {
  OrderWorker.deleteOne({ _id: req.body._id })
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      res.send(error);
    });
});


app.post("/delete-service-client", async (req, res) => {
  OrderClient.deleteOne({ _id: req.body._id })
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      res.send(error);
    });
});


//blog data
app.get("/blog",async (req,res) =>{
  await BlogData.find()
  .then((data)=>{
    console.log(data)
    res.json(data);
  })
  .catch((error)=>{
    res.send(error);
  });
});


module.exports = app;
