import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AOfPHaLPnT22VnJndPAf2fGW7SSUvuw",
  authDomain: "myfirstdatabase-dff13.firebaseapp.com",
  projectId: "myfirstdatabase-dff13",
  storageBucket: "myfirstdatabase-dff13.appspot.com",
  messagingSenderId: "1029433132099",
  appId: "1:1029433132099:web:1cf8ca439011606de480f6",
  measurementId: "G-0F3RKWS8MG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics();
//const app =initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
var db = firebase.database();


function sendMessage(){
 
  var name = document.getElementById("userName").value;
  var email = document.getElementById("userEmail").value;
  var comment = document.getElementById("userComment").value;

   var newNessageKey = database.ref().child("users").push().key;
   database.ref("users/"+newNessageKey+"/userEmail").set(email);
   database.ref("users/"+newNessageKey+"/userName").set(name);
   database.ref("users/"+newNessageKey+"/userComment").set(comment);
}

//document.getElementById("commentForm").addEventListener("submit");

var button = document.querySelector("#submit");

button.addEventListener("click", function onclick(event) {
  event.preventDefault();
});



if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-YHGC94RQMF');