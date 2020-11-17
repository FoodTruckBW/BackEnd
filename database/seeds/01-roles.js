exports.seed = function (knex) {
  return knex("roles").insert([
    {
      name: "vendor", // will get id 1
    },
    {
      name: "user", // will get id 2
    }
  ]);
};
