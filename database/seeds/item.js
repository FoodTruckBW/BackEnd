exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Menu")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Menu").insert([
        { Name: "Cheese", Description: "mmmm milk", price: 5 },
      ]);
    });
};
