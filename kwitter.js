function AddUser(){
    user1= document.getElementById("user_name").value;
    localStorage.setItem("userName", user1);
    window.location="kwitter_room.html";
}