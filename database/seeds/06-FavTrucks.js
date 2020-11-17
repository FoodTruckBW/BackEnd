exports.seed = function (knex) {
  return knex("FavTrucks").insert([
   
    {
      UserId: 3,
      TruckId: 4
    },
    {
      UserId: 3,
      TruckId: 2
    },
    {
      UserId: 4,
      TruckId: 1
    },
    {
      UserId: 4,
      TruckId: 2
    },

  ]);
};
