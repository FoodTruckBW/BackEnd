
exports.seed = function(knex) {
  return knex("ItemRatings").insert([
    {
      rating: 10,
      TruckId: 1,
      ItemId: 1  
    },
    {
      rating: 9,
      TruckId: 1,
      ItemId: 2  
    },
    {
      rating: 8,
      TruckId: 2,
      ItemId: 3  
    },
    {
      rating: 5,
      TruckId: 2,
      ItemId: 4  
    },
    {
      rating: 6,
      TruckId: 2,
      ItemId: 5  
    },
    {
      rating: 10,
      TruckId: 3,
      ItemId: 6  
    },
    {
      rating: 9,
      TruckId: 3,
      ItemId: 7  
    },
    {
      rating: 2,
      TruckId: 4,
      ItemId: 6  
    },
    {
      rating: 6,
      TruckId: 4,
      ItemId: 7  
    },
    {
      rating: 4,
      TruckId: 4,
      ItemId: 7  
    },
    
  ]);
;
};
