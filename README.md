The testing is done Postman app

Api Endpoints
Register : http://localhost:3030/auth/register
body 
 {
    "email" : "emailid",
    "password" : "yourpassword"
     
}


Login : http://localhost:3030/auth/login
body 
 {
    "email" : "emailid",
    "password" : "yourpassword"
     
}
Add items : http://localhost:3030/cart/additem
Body 
{
  "userId": 2,
  "productId": 321,
  "quantity": 10
}

Update items :
{
  "userId": 2,
  "productId": 321,
  "quantity": 10
}

Get items :http://localhost:3030/cart/items/1
Delete items : http://localhost:3030/cart/remove/1/22

Order
create order :http://localhost:3030/order/create
body
{
    "orderId" : 2,
    "status" : "delivered"
}
Updating status using OrderID
update : http://localhost:3030/order/update-status
body
{
    "orderId" : 2,
    "status" : "delivered"
}
