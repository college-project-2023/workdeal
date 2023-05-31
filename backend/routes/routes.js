const express = require("express");
const userModel = require("../models/search");
const userClientModel = require("../models/users/userdataclient");
const userWorkerModel = require("../models/users/userdataworker");
const OrderWorker = require("../models/orders/workers");
const CurrentOrderWorker = require("../models/orders/currentOrder");
const OrderClient = require("../models/orders/client")
const app = express();
const cookieParser = require("cookie-parser");
const admin = require("../firebase-config");
var crypto = require("crypto-js");
const { response } = require("express");
const { default: mongoose } = require("mongoose");
app.use(cookieParser());

var loggedin = false;

async function middleware(request, response, next) {
  loggedin = request.cookies["loggedin"];
  if (loggedin != "false" && loggedin != undefined) {
    var bytes = crypto.AES.decrypt(loggedin, "getlost");
    var decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    try {
      const verified = await admin.auth().verifyIdToken(decryptedData);
      if (verified) {
        console.log("logged in");
        response.send("loggedin");
        next();
      } else {
        response.send("login");
        console.log("not logged in");
      }
    } catch (Exception) {
      response.send("login");
    }
  } else {
    response.send("login");
  }
}

app.get("/checkuser", middleware, async (request, response) => {});

app.post("/create-user-client", async (request, response) => {
  const signup = new userClientModel(request.body);
  try {
    await signup.save();
    response.send(signup);
  } catch (error) {
    response.status(500).send(error);
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

app.get(`/get-user-data/:uid`, async (req, res) => {
  const worker = new userWorkerModel(req.body);
  const client = new userClientModel(req.body);
  const userid = req.params.uid;
  worker.collection.findOne({ uid: userid }, function (error, data) {
    if (error) {
      client.collection.findOne({ uid: userid }, function (error, data) {
        if (error) {
          res.sendStatus(404);
        } else {
          res.send(data);
        }
      });
    } else {
      if (data == null) {
        client.collection.findOne({ uid: userid }, function (error, data) {
          if (error) {
            res.sendStatus(404);
          } else {
            if (data != null) {
              res.send(data);
            } else {
              res.sendStatus(404);
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

module.exports = app;
