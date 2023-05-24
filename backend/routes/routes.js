const express = require("express");
const userModel = require("../models/search");
const userClientModel = require("../models/users/userdataclient");
const userWorkerModel = require("../models/users/userdataworker");
const app = express();
const cookieParser = require("cookie-parser");
const admin = require("../firebase-config");
var crypto = require("crypto-js");
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
      response.send("login")
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
  console.log(req.params.uid);
  const userid = req.params.uid;
  worker.collection.findOne({ uid: userid }, function (error, data) {
    if (error) {
      res.sendStatus(404);
    }
    res.send(data);
  });
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
