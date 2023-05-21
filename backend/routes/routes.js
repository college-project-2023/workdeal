const express = require("express");
const userModel = require("../models/search");
const userClientModel = require("../models/userdataclient")
const userWorkerModel = require("../models/userdataworker")
const app = express();

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