import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyABL9iTo8jnAu1_XA1jg7L289yPLkaudAs",
    authDomain: "firstapp-1a01b.firebaseapp.com",
    projectId: "firstapp-1a01b",
    storageBucket: "firstapp-1a01b.firebasestorage.app",
    messagingSenderId: "262742153723",
    appId: "1:262742153723:web:13a3a7efd61f6e85e9d35e",
    measurementId: "G-QRTK9R4JRZ",
    databaseURL: 'https://firstapp-1a01b-default-rtdb.firebaseio.com', // Add this line
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const btn = document.getElementById("abc");

btn.addEventListener("click", function () {
  const nameee = document.getElementById("nameee").value;
  const about = document.getElementById("about").value;
  const content = document.getElementById("content").value;

  set(ref(database, "user/" + nameee), {
    nameee: nameee,
    about: about,
    content: content,
  })
    .then(() => {
      console.log("Data saved successfully!");
      alert("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving data:", error);
      alert("Error saving data: " + error.message);
    });
});
