
exports.seed = function(knex) {
  return knex("Locations").insert([
    {
      Location: "5th Ave",
      arrivalTime:"2:00 pm",
      departureTime: "4:00 pm"
    },
    {
      Location: "7th Ave",
      arrivalTime:"5:00 pm",
      departureTime: "8:00 pm"
    },
  ]);
;
};
