**BACKEND**

Base: http://foodtruck-tracker-bw.herokuapp.com/api


**USER Data**
-----------------------------------------
|CRUD| api/*** | expect:  |
|---| ------- | ---------------------------- |
|POST| /register | must contain username, password, email, role see $ |
|POST| /login | returns token  |

<br>

$ = required
required in body:
<br>
<br>
<pre><code>{ <br>
username: STRING $ <br>
password: STRING $ <br>
email: STRING $<br>
role: //1 will be vendor, 2 will be diner $<br>
}</code> </pre><br> <br>

**Truck Data**
-----------------------------------------
|CRUD| api/**** | expect:  |
|---| ------- | ---------------------------- |
|GET| /trucks | returns array of food trucks |
|GET| /trucks:id | returns array of single food truck |
|GET| /trucks:id/rate | returns array of ratings for truck at ID |
|POST| /trucks | to post a new truck see $ |
|PUT| /trucks:id | to edit one truck in specific |
|DELETE| trucks:id| deletes one truck in particular|

$ = required
required in body:
<br>
<br>
<pre><code>{ <br>
Name: STRING $ <br>
imageURL: STRING $ <br>
cuisineType: STRING $<br>
}</code> </pre><br> <br>


**Item Data**
-----------------------------------------
|CRUD| api/**** | expect:  |
|---| ------- | ---------------------------- |
|GET| /item | returns array of food for sale |
|GET| /item/:id | single food item |
|POST| /item | to post a new item see $ |
|PUT| /item:id | to edit one item in specific |
|DELETE| item:id| deletes one item in particular|

<br>
<br>
<pre><code>{ <br>
Name: STRING $ <br>
Description: STRING $ <br>
photoURL: STRING $ <br>
price: INTEGER $<br>
}</code> </pre><br> <br>
