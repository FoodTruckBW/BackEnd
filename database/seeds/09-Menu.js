
exports.seed = function(knex) {
  return knex("Menu").insert([
    {
      name: "Taco",
      description:"traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
      price: 10,
      rating: 10
    },
    {
      name: "Burrito",
      description:"Mexican and Tex-Mex cuisine consisting of a flour tortilla wrapped into a sealed cylindrical shape around various ingredients",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Carne-asada-burrito.jpg",
      price: 5,
      rating: 10
    },
    {
      name: "Bánh mì",
      description:" a type of short baguette with thin, crisp crust and soft, airy texture inside that is often split lengthwise and filled with various savory ingredients like a submarine sandwich and served as a meal.",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/fd/01_Baoguette_Pork_Banh_Mi.jpg",
      price: 8,
      rating: 10
    },
    {
      name: "Spring Rolls",
      description:"consisting of pork, prawn, vegetables, bún",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Spring_rolls_with_peanut_sauce.jpg",
      price: 10,
      rating: 10
    },
    {
      name: "burger",
      description:"If you like bland cheese and soft, mushy buns, have at it",
      imageURL: "http://3q87le1gsko01ibim33e4wib-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/IMG_8040-e1455563495903.jpg",
      price: 1,
      rating: 1
    },
    {
      name: "Fries",
      description:"better than the burgers",
      imageURL: "https://i.imgur.com/75cGMOo.jpg",
      price: 1,
      rating: 2
    },
    {
      name: "Bob Burger",
      description:"now this is a burger, not like that other place.",
      imageURL: "https://cdn.shopify.com/s/files/1/0892/9648/products/burgerbobsticker.jpg?v=1586299800",
      price: 10,
      rating: 10
    }    
  ]);
;
};

