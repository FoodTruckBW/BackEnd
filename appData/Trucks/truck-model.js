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
    .leftJoin("Locations as l", "l.id", "t.id")
    .leftJoin("TruckRatings as r", "t.id", "r.TruckId")
    .avg("rating as ratingAVG")
    .where({ "t.id": id })
    .select(
      "Location",
      "Name",
      "TruckId",
      "arrivalTime",
      "cuisineType",
      "departureTime",
      "t.id",
      "imageURL"
    );
  //returns CurrentLocation, can remove with .select({ALL TABLE NAMES EXCEPT CurrentLocation})
}

function getTruckRating(id) {
  return db("TruckRatings").where({ TruckId: id });
}

function updateTruck(id, newData) {
  return db("TruckInfo").where({ id }).update(newData);
}

function delTruck(id) {
  return db("TruckInfo").where({ id }).del();
}

function getTruckMenu(id) {
  return db("Menu").where({ TruckId: id }).first();
}
