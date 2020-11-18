exports.seed = function (knex) {
  return knex("TruckInfo").insert([
    {
      Name: "Paco's Tacos",
      imageURL: "http://www.pacoscantina.com/assets/images/Main-Logo-A03.gif",
      cuisineType: "mexican",
      CustomerRating: 5,
      CurrentLocation: 1,
    },
    {
      Name: "WHATABURGER",
      imageURL:
        "https://www.kltv.com/resizer/or5mqVfPSUFp92P-ZnRxmQ5btds=/1200x600/cloudfront-us-east-1.images.arcpublishing.com/raycom/MR4RBHVK3JBSZOUZFXHVIFZAJY.jpeg",
      cuisineType: "TEXAN",
      CustomerRating: 3,
      CurrentLocation: 2,
    },
    {
      Name: "The Pham",
      imageURL:
        "https://ncifrederick.cancer.gov/about/theposter/sites/default/files/styles/large/public/field/image/Market_FNL5053--M.jpg?itok=KNjdwusC",
      cuisineType: "vietnamese",
      CustomerRating: 5,
      CurrentLocation: 2,
    },
    {
      Name: "Bob's Burgers",
      imageURL: "https://i.redd.it/ooj01ytz3l121.jpg",
      cuisineType: "American",
      CustomerRating: 5,
      CurrentLocation: 1,
    },
  ]);
};
