function logout(){
window.location = "login.html"; 
localStorage.clear();  
}
function addUser(){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name" , user_name); 
window.location = "index.html";   
}
user_name = localStorage.getItem("user_name");
document.getElementById("name").innerHTML = "Welcome " + user_name + "!";