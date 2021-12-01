
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB2apMwhBkrWq-pN9Jd38WdnZWdR8DcnB0",
    authDomain: "chat-app-95391.firebaseapp.com",
    projectId: "chat-app-95391",
    storageBucket: "chat-app-95391.appspot.com",
    messagingSenderId: "950295476663",
    appId: "1:950295476663:web:7221b5198fe2b978b5d032"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
