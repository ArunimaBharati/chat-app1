
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyB2apMwhBkrWq-pN9Jd38WdnZWdR8DcnB0",
  authDomain: "chat-app-95391.firebaseapp.com",
  databaseURL: "https://chat-app-95391-default-rtdb.firebaseio.com",
  projectId: "chat-app-95391",
  storageBucket: "chat-app-95391.appspot.com",
  messagingSenderId: "950295476663",
  appId: "1:950295476663:web:7221b5198fe2b978b5d032"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   console.log("Room Name-"+Room_names);
      row="<div claas='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
