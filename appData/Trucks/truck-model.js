const db = require("../../database/connection.js");

module.exports = {
  addTruck,
  getAllTrucks,
  getTruckById,
  updateTruck,
  delTruck,

  getTruckRating,
  getTruckMenu,
};

function addTruck(truckData) {
  return db("TruckInfo").insert(truckData, "id");
}

//tested
function getAllTrucks() {
  return db("TruckInfo");
}

//tested
function getTruckById(id) {
  return db("TruckInfo as t")
    .join("Locations as l", "l.id", "t.id")
    .where({ "t.id": id });
  //returns CurrentLocation, can remove with .select({ALL TABLE NAMES EXCEPT CurrentLocation})
}

function updateTruck(id, newData) {
  return db("TruckInfo").where({ id }).update(newData);
}

function delTruck(id) {
  return db("TruckInfo").where({ id }).del();
}

function getTruckRating(id) {
  return db("TruckRatings").where({ TruckId: id }).first();
}

function getTruckMenu(id) {
  return db("Menu").where({ TruckId: id }).first();
}
