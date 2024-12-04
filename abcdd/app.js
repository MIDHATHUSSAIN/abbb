import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyABL9iTo8jnAu1_XA1jg7L289yPLkaudAs",
  authDomain: "firstapp-1a01b.firebaseapp.com",
  projectId: "firstapp-1a01b",
  storageBucket: "firstapp-1a01b.appspot.com",
  messagingSenderId: "262742153723",
  appId: "1:262742153723:web:13a3a7efd61f6e85e9d35e",
  measurementId: "G-QRTK9R4JRZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const btn = document.getElementById("abc");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  const namee = document.getElementById("namee").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password,namee)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Account created");
      alert("Account created");
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating account:", errorCode, errorMessage);
      alert(errorMessage);
    });
});