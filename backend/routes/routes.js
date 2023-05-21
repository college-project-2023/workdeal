const express = require("express");
const userModel = require("../models/search");
const UserClient = require("../model/search")
const app = express();

const middleware = (request,response,next) => {
  console.log("middlew")
}

middleware();

app.post("/signup", async (request,response) => {
  const signup = new UserClient(request.body);
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

app.get("/workdeal/search/name", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;