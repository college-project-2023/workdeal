const express = require("express");
const userModel = require("../models/search");
const userClientModel = require("../models/users/userdataclient")
const userWorkerModel = require("../models/users/userdataworker")
const app = express();
const cookieParser = require("cookie-parser");
const admin = require('../firebase-config')
app.use(cookieParser());

var loggedin = false;

async function middleware(request,response,next){
  loggedin = request.cookies['loggedin'];
  if (loggedin!="false" && loggedin!=undefined){
    const verified = await admin.auth().verifyIdToken(loggedin);
    if (verified){
      console.log("logged in")
      next();
    }else{
      response.send("login")
      console.log("not logged in")
    }
  }else{
    response.send("login")
  }
  
}


app.get("/", middleware, async(request,response) => {
  console.log("asjsdh")
});

app.post("/create-user-client", async (request,response) => {
  const signup = new userClientModel(request.body);
  try {
    await signup.save()
    response.send(signup)
  } catch (error){
    response.status(500).send(error);
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