const express = require("express");
const userModel = require("../models/search");
const userClientModel = require("../models/userdataclient")
const app = express();

const middleware = (request,response,next) => {
  console.log("middlew")
}

middleware();

app.post("/create-user", async (request,response) => {
  const signup = new userClientModel(request.body);
  try {
    await signup.save()
    response.status(200).send(signup)
    response.setHeader("location","/account")
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