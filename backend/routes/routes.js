const express = require("express");
const fs = require("fs");
const servicesModel = require("../models/services");
const userModel = require("../models/search");
const userClientModel = require("../models/users/userdataclient");
const userWorkerModel = require("../models/users/userdataworker");
const OrderWorker = require("../models/orders/workers");
const Review = require("../models/orders/review");
const BlogData = require("../models/blog-data");
const app = express();
const cookieParser = require("cookie-parser");
const admin = require("../firebase-config");
const { response } = require("express");
const { default: mongoose } = require("mongoose");
app.use(cookieParser());
app.use(express.json());
const { spawn,signal } = require("child_process");
const { exec } = require("node:child_process");
const { stringify } = require("querystring");
const { default: axios } = require("axios");
const { kill } = require("process");

var loggedin = false;

app.get("/get-review-score", async (req, res) => {
  exec(
    "python pymodel/sentiment.py " + req.query.text,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send(error);
        return;
      }
      if (stderr) {
        console.error(`Python Error: ${stderr}`);
        res.status(500).send(error);
        return;
      }
      const prediction = stdout;
      console.log(prediction);
      res.send(prediction);
    }
  );
});

app.get("/get-review-score-from-service", async (req, res) => {
  servicesModel
    .findOne({ uid: req.query.uid })
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      console.log("rs" + err);
    });
});

app.post("/set-review-score", async (req, res) => {
  console.log(req.body.score + "set review");
  servicesModel
    .findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          review_score: req.body.score,
        },
      }
    )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/get-work-count", async (req, res) => {
  await OrderWorker.find({ orderToUid: req.query.uid })
    .then((data) => {
      console.log(data);
      if (data) {
        res.send(data.length.toString());
      } else {
        res.send("0");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/set-work-count", async (req, res) => {
  servicesModel
    .findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          no_works: req.body.count,
        },
      }
    )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err + "a");
    });
});



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
      if (error) {
        console.log(error);
      }
      if (data && data.enabled) {
        res.send("online");
      } else  {
        res.send("offline");
      }
      
    }
  );
});

app.post("/setworkeractive", (req, res) => {
  const workeractive = new servicesModel(req.body);
  console.log(req.body.location);
  workeractive.collection
    .findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          no_works: req.body.no_works,
          enabled: true,
          location:req.body.location
        },
      }
    )
    .then((r) => {
      console.log(r)
      if(r.value){
        res.send("done");
      }else{
        try {
          workeractive.save();
          res.send("done");
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      }
    })
    .catch(async (err) => {
      console.log(err);
      try {
        await workeractive.save();
        res.send("done");
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    });
});

app.post("/setworkeroffline", (req, res) => {
  servicesModel
    .findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          enabled: false,
        },
      }
    )
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

app.get("/data", (req, res) => {
  try {
    const { tag, location, price, rating } = req.query;
    console.log(price);
    var filter = {};
    if (tag != "") {
      filter.tag = tag.toLowerCase();
    } else {
      filter.tag = 0;
    }
    if (location) {
      filter.location = location;
    } else {
      filter.location = 0;
    }
    if (price) {
      filter.price = price;
    } else {
      filter.price = 0;
    }
    if (rating) {
      filter.rating = rating;
    } else {
      filter.rating = 0;
    }
    filter.enabled = true;
    console.log(filter)

    execution_str = [
      "python",
      "pymodel/model.py",
      filter.tag,
      filter.price,
      filter.location,
      filter.rating,
    ];
    const command = spawn(execution_str[0], execution_str.slice(1));
    
    let responseData = ''; 
    command.stdout.on("data", (data) => {
      responseData = data.toString(); 
    });

    command.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });
  
    command.on("close", (code) => {
      command.kill(code)
      console.log(`child process exited with code ${code}`);
      const csvData = responseData.trim();
      const lines = csvData.split("\n");
      const header = lines[0].split(",");
      const finaldata = lines.slice(1).map((line) => {
        const values = line.split(",");
        const cleanedValues = values.map((value) => value.trim());
        return header.reduce((obj, key, index) => {
          obj[key.trim()] = cleanedValues[index];
          return obj;
        }, {});
      });
      res.json(finaldata)
    });

    command.on("error", (error) => {
      console.error(`Error executing process: ${error.message}`);
      res.status(500).json({ error: "Internal Server Error" });
    });

  } catch (error) {
    console.error("last "+error.message);
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

app.post("/update-profile-pic-worker", async (req, res) => {
  const worker = new userWorkerModel(req.body);
  try {
    const updatePP = await worker.collection.findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          imageUrl: req.body.imageUrl,
        },
      }
    );
    res.send("success");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/update-profile-pic-client", async (req, res) => {
  const client = new userClientModel(req.body);
  try {
    const updatePP = await client.collection.findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: {
          imageUrl: req.body.imageUrl,
        },
      }
    );
    res.send("success");
  } catch (error) {
    res.status(500).send(error);
  }
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

async function checkOrderplaced(req, res, next) {
  await OrderWorker.find({
    orderByUid: req.body.orderByUid,
    orderToUid: req.body.orderToUid,
  })
    .then((workers) => {
      console.log(workers);
      if (workers != null) {
        var go = false;
        for (var i = 0; i < workers.length; i++) {
          if (workers[i].status != "completed") {
            go = true;
            break;
          }
        }
        if (!go) {
          next();
        } else {
          res.send("placed");
        }
      } else {
        next();
      }
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
}

app.post("/check-for-order-placed", checkOrderplaced, (req, res) => {
  res.send("notplaced");
});

app.post("/set-order-work", checkOrderplaced, async (req, res) => {
  const ordernow = new OrderWorker(req.body);
  try {
    await ordernow.save();
    res.send("success");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

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

app.post("/set-avg-review-worker", async (req, res) => {
  const rate = Number.parseInt(req.body.rate);
  const userid = req.body.uid;
  servicesModel
    .findOneAndUpdate({ uid: userid }, { $set: { rating: rate } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
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

async function updatePrice(req, res, next) {
  OrderWorker.findOneAndUpdate(
    { _id: req.body.workId },
    {
      $set: {
        amount: req.body.price,
      },
    }
  )
    .then((res) => {
      next();
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

app.post(`/set-review-worker`, updatePrice, async (req, res) => {
  const reviewModel = new Review(req.body);
  try {
    reviewModel.save();
    res.send(reviewModel);
  } catch (error) {
    res.status(500).send(error);
  }
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
  OrderWorker.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        status: "cancelled",
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
