exports.seed = function (knex) {
  return knex("Diner").insert([
    {
      UserId: 3,
      Location: "Arlen, Texas",
    },
    {
      UserId: 4,
      Location: "Springfield, USA",
    }
  ]);
};
