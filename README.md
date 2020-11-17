=BACKEND=

Base: /api

-Truck Data-

[GET] /trucks

returns: array of truck objects [ { } ]

[GET] /trucks/:id

returns: truck object at given ID

[POST] /trucks

$ = required
required in body:
{
Name: STRING $
imageURL: STRING $
cuisineType: STRING $
}
returns: new truck object

[PUT] /trucks/:id
body must be same struture as POST
returns: changes truck object

[DELETE] /trucks/:id

returns: message

-Item Data-

[GET] /item

returns: array of item objects [ { } ]

[GET] /item/:id

returns: item object at given ID

[POST] /item

$ = required
required in body:
{
Name: STRING $
Description: STRING $
photoURL: STRING 
price: INTEGER $
}
returns: new item object

[PUT] /item/:id
body must be same struture as POST
returns: changes item object

[DELETE] /item/:id

returns: message
