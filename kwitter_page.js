//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");


    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
