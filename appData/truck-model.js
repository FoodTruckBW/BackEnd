const db = require("../database/connection.js");

module.exports = {
  addTruck,
  getAllTrucks,
  getTruckById,
  updateTruck,
  delTruck,
};

function addTruck(truckData) {
  return db("TruckInfo").insert(truckData, "id");
}

function getAllTrucks() {
  return db("TruckInfo");
}

function getTruckById(id) {
  return db("TruckInfo").where({ id }).first();
}

function updateTruck(id, newData) {
  return db("TruckInfo").where({ id }).update(newData);
}

function delTruck(id) {
  return db("TruckInfo").where({ id }).del();
}
