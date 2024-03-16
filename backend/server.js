const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io'); // Importing Socket.IO
const http = require('http'); // Importing the HTTP module to create a server
const Router = require("./routes/routes.js");

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(Router);

// Create an HTTP server instance
const server = http.createServer(app);

// Initialize Socket.IO
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     credentials: true
//   }
// });

// // Socket.IO event handling
// io.on('connection', (socket) => {
//   console.log('a user connected with socketId: '+ socket.id);

//   socket.on('message', (data) => {
//     console.log(data);
//     socket.emit('messageReturn', {message: "return message"});
//   })

//   // Handle socket events here
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});