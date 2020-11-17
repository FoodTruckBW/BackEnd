exports.seed = function (knex) {
  return knex("Diner").insert([
    {
      id: 1,
      UserId: 3,
      Location: "austin, texas",
    },
    {
      id: 2,
      UserId: 4,
      Location: "Springfield, USA",
    },
    

  ]);
};
