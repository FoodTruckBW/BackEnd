exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "hank",
      password: "hill",
      role:1
    },
    {
      id: 2,
      username: "Homer",
      password: "Simpson",
      role:1
    },
    {
      id: 3,
      username: "Bobby",
      password: "Hill",
      role:2
    },
    {
      id: 4,
      username: "Bart",
      password: "Simpson",
      role:2
    },

  ]);
};
