
exports.seed = function(knex) {
  return knex("TruckRatings").insert([
    {
      rating: 10,
      TruckId: 1  
    },
    {
      rating: 9,
      TruckId: 1  
    },
    {
      rating: 8,
      TruckId: 1  
    },
    {
      rating: 5,
      TruckId: 2  
    },
    {
      rating: 6,
      TruckId: 2  
    },
    {
      rating: 10,
      TruckId: 3  
    },
    {
      rating: 9,
      TruckId: 3  
    },
    {
      rating: 2,
      TruckId: 4  
    },
    {
      rating: 6,
      TruckId: 4  
    },
    {
      rating: 4,
      TruckId: 4  
    },
    
  ]);
;
};
