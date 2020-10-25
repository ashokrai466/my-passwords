
function generate(){

var charset= "ABCDEFGHTIJLMNOPQRSTUVWXYZabxdefghijklmnopqurstuvwxyz0123456789!@#$%.";
 var passwordLength =10;
 var  password="";


for(var i=0;i<passwordLength;i++){
var randomnum = Math.floor(Math.random()*charset.length);
password+=charset.substring(randomnum,randomnum+1);
}
document.getElementById("input").value= password;

}