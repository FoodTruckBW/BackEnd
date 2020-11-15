const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("colors");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

const userRouter = require('../../users/users-router')
const authRouter = require('../auth-router')
server.use('/api/', userRouter, authRouter)

server.get("/", (req, res) => {
  res.send("the server is running ◕ ◡ ◕ ");
});

module.exports = server;
