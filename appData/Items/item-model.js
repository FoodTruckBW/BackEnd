const db = require("../../database/connection.js");

module.exports = {
  addItems,
  getItems,
  getItemById,
  updateItem,
  delItem,
  getItemRating,
};

function addItems(itemData) {
  return db("Menu").insert(itemData, "id");
}

function getItems() {
  return db("Menu");
}

function getItemById(id) {
  return db("Menu").where({ id });
}

function updateItem(id, newData) {
  return db("Menu").where({ id }).update(newData);
}

function delItem(id) {
  return db("Menu").where({ id }).del();
}

function getItemRating(id) {
  return db("ItemRatings").where({ ItemId: id }).first();
}
