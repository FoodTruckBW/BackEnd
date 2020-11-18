exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("id");

      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("users", (tbl) => {
      tbl.increments("id");

      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable()
      tbl.string("email").notNullable().unique()
      tbl
        .integer("role")
        .notNullable()
        .unsigned()
        .references("roles.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("Locations", (tbl) => {
      tbl.increments("id");
      tbl.string("Location");
      tbl.string("arrivalTime");
      tbl.string("departureTime");
    })
    .createTable("TruckInfo", (tbl) => {
      tbl.increments("id");
      tbl.string("Name").notNullable().unique();
      tbl.string("imageURL");
      tbl.string("cuisineType").notNullable();
      tbl.integer("CustomerRating");
      // tbl
      //   .integer("TruckOwner")
      //   .notNullable()
      //   .references("OwnedTrucks.UserId")
      //   .onDelete("CASCADE")
      //   .onUpdate("CASCADE");
      tbl
        .integer("CurrentLocation")
        .unsigned()
        .references("Locations.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("OwnedTrucks", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("UserId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("TruckId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("TruckInfo")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("Diner", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("UserId")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("Location").notNullable();
    })
    .createTable("FavTrucks", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("UserId")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("TruckId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("TruckInfo")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("TruckRatings", (tbl) => {
      tbl.increments("id");
      tbl.integer("rating").unsigned();
      tbl
        .integer("TruckId")
        .unsigned()
        .references("TruckInfo.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("Menu", (tbl) => {
      tbl.increments("id");
      tbl.string("Name").notNullable();
      tbl.string("Description").notNullable();
      tbl.string("photoURL");
      tbl.integer("price").notNullable();
      tbl.integer("rating");
    })
    .createTable("ItemRatings", (tbl) => {
      tbl.increments("id");
      tbl.integer("rating").unsigned();
      tbl
        .integer("TruckId")
        .unsigned()
        .references("TruckInfo.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ItemId")
        .unsigned()
        .references("Menu.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ItemRatings")
    .dropTableIfExists("Menu")
    .dropTableIfExists("TruckRatings")
    .dropTableIfExists("FavTrucks")
    .dropTableIfExists("Diner")
    .dropTableIfExists("OwnedTrucks")
    .dropTableIfExists("TruckInfo")
    .dropTableIfExists("Locations")
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
};
