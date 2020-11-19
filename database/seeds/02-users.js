exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "hank",
      password: "hill",
      email: "hank@koth.com",
      role:1
    },
    {
      id: 2,
      username: "Homer",
      password: "Simpson",
      email: "homer@Springfield.net",
      role:1
    },
    {
      id: 3,
      username: "Bobby",
      password: "Hill",
      email: "Bobby@koth.com",
      role:2
    },
    {
      id: 4,
      username: "Bart",
      password: "Simpson",
      email: "elbarto@Springfield.net",
      role:2
    },

  ]);
};
