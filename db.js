import mysql from 'mysql2';
const c = mysql.createConnection({
    host :"localhost",
    user:"root",
    password :"yourpassword",
    database:"shop"
});
c.connect(function(error){
  if(error){
    throw error;
  }
  else{
    console.log("Mysql is connected");
  }
});
export default c;