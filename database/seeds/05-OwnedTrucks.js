exports.seed = function (knex) {
  return knex("OwnedTrucks").insert([
    {
      UserId: 1,
      TruckId: 1,
    },
    {
      UserId: 1,
      TruckId: 2,
    },
    {
      UserId: 2,
      TruckId: 3,
    },
    {
      UserId: 2,
      TruckId: 4,
    },
  ]);
};
