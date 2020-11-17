exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Locations")
    .del()
    .then(() => {
      return knex("TruckInfo").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("TruckInfo").insert([
        {
          Name: "test1",
          imageURL: ".com",
          cuisineType: "Bacon",
          CustomerRating: 5,
        },
      ]);
    })
    .then(() => {
      return knex("Locations").insert([
        {
          Location: "155513 SW Bread",
          arrivalTime: "5PM",
          departureTime: "6AM",
        },
      ]);
    });
};
