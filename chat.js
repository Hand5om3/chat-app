// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyATjbRT1rGYgSC5bDJ0tm2xZWr7kDHxcuA",
    authDomain: "chatapp-7d16c.firebaseapp.com",
    databaseURL: "https://chatapp-7d16c-default-rtdb.firebaseio.com",
    projectId: "chatapp-7d16c",
    storageBucket: "chatapp-7d16c.appspot.com",
    messagingSenderId: "943250656895",
    appId: "1:943250656895:web:50bd08e2c3f555433bf94a"
  };
  
  // Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



