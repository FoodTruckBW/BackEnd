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

const userRouter = require("../../users/users-router");
const authRouter = require("../auth-router");

const truckRouter = require("../../appData/Trucks/truck-router");
const itemRouter = require("../../appData/Items/item-router");

server.use("/api", userRouter, authRouter);
server.use("/api", truckRouter);
server.use("/api", itemRouter);

server.get("/", (req, res) => {
  res.send("The server is running ◕ ◡ ◕");
});

module.exports = server;
