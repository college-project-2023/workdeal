const express = require("express");
const fs = require("fs");
const servicesModel = require("../models/services");
const userModel = require("../models/search");
const userClientModel = require("../models/users/userdataclient");
const userWorkerModel = require("../models/users/userdataworker");
const OrderWorker = require("../models/orders/workers");
const CurrentOrderWorker = require("../models/orders/currentOrder");
const OrderClient = require("../models/orders/client");
const Review = require("../models/orders/review");
const BlogData = require("../models/blog-data");
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
        response.status(400).send({ message: "expired1" });
        console.log("1");
      }
    } catch (error) {
      response.status(400).send({ message: "expired2" });
      console.log(error);
    }
  } else {
    response.status(400).send({ message: "expired3" });
    console.log("3");
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

app.post("/checkworkeractive", (req, res) => {
  const workeractive = new servicesModel(req.body);
  workeractive.collection.findOne(
    { uid: req.body.uid },
    async function (error, data) {
      if (data) {
        res.send("online");
      } else {
        res.send("offline");
      }
      if (error) {
        console.log(error);
      }
    }
  );
});

app.post("/setworkeractive", (req, res) => {
  const workeractive = new servicesModel(req.body);
  console.log(req.body.uid);
  workeractive.collection.findOne(
    { uid: req.body.uid },
    async function (error, data) {
      if (data) {
        res.send("alreadyactive");
      } else {
        try {
          await workeractive.save();
          res.send("done");
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      }
      if (error) {
        console.log(error);
      }
    }
  );
});

app.post("/setworkeroffline", (req, res) => {
  servicesModel
    .deleteOne({ uid: req.body.uid })
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/data", async (req, res) => {
  try {
    const { tag, location, price, rating } = req.query;
    const filter = {};
    if (tag != "") {
      filter.tag = tag.toLowerCase();
      console.log(tag);
    }
    if (location) {
      filter.location = location;
    }
    if (price) {
      if (price == 500) {
        filter.price = {
          $gte: 0,
          $lte: 500,
        };
        console.log(filter.price);
      }
      if (price == 2000 - 5000) {
        filter.price = {
          $gte: 2000,
          $lte: 5000,
        };
        console.log(filter.price);
      }
      if (price == 500 - 1000) {
        filter.price = {
          $gte: 500,
          $lte: 1000,
        };
        console.log(filter.price);
      }
      if (price == 1000 - 2000) {
        filter.price = {
          $gte: 1000,
          $lte: 2000,
        };
        console.log(filter.price);
      }
    }
    if (rating) {
      filter.rating = rating;
    }
    console.log(filter);
    servicesModel
      .find(filter)
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
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

app.post(`/get-user-data/`, middleware, async (req, res) => {
  const worker = new userWorkerModel(req.body);
  const client = new userClientModel(req.body);
  const userid = req.body.uid;
  worker.collection.findOne({ uid: userid }, function (error, data) {
    if (error) {
      client.collection.findOne({ uid: userid }, function (error, data) {
        if (error) {
          res.status(404).send({ message: "user not found" });
        } else {
          res.send(data);
        }
      });
    } else {
      if (data == null) {
        client.collection.findOne({ uid: userid }, function (error, data) {
          if (error) {
            res.status(404).send({ message: "user not found" });
          } else {
            if (data != null) {
              res.send(data);
            } else {
              res.status(404).send({ message: "user not found" });
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

app.post(`/get-orders-worker/`, async (req, res) => {
  const userid = req.body.orderToUid;

  OrderWorker.find({ orderToUid: userid })
    .then((workers) => {
      res.json(workers);
    })
    .catch((error) => {
      res.send(error);
    });
});

async function checkOrderplaced(req,res,next){
  OrderWorker.findOne({orderByUid:req.body.orderByUid,orderToUid:req.body.orderToUid})
  .then((workers)=>{
    console.log(workers)
    if(workers!=null){
      res.send("placed");
    }else{
      next();
    }
  }).catch((error)=>{
    console.log(error)
    res.send(error)
  })
}

app.post("/check-for-order-placed",checkOrderplaced,(req,res)=>{
  res.send("notplaced");
})

app.post("/set-order-work",checkOrderplaced,async(req,res)=>{
  const ordernow = new OrderWorker(req.body);
  try {
    await ordernow.save();
    res.send("success");
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
})

app.post(`/get-orders-client/`, async (req, res) => {
  const userid = req.body.orderByUid;

  OrderWorker.find({ orderByUid: userid })
    .then((workers) => {
      res.json(workers);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post(`/get-review-worker`, async (req, res) => {
  const userid = req.body.uid;

  Review.find({ uid: userid })
    .then((reviews) => {
      res.json(reviews);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/set-current-work", async (request, response) => {
  OrderWorker.findOneAndUpdate(
    { _id: request.body._id },
    {
      $set: {
        status: "working",
      },
    }
  )
    .then((res) => {
      response.send("success");
    })
    .catch((error) => {
      console.log(error);
      response.status(400).send(error);
    });
});

app.post("/cancel-service", async (req, res) => {
  OrderWorker.deleteOne({ _id: req.body._id })
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/complete-service", async (req, res) => {
  OrderWorker.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        status: "completed",
      },
    }
  )
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      res.send(error);
    });
});

//blog data
app.get("/blog", async (req, res) => {
  await BlogData.find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = app;
