// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUCSuhc0x-weLcQXXpXuiVqv67m5ratqE",
  authDomain: "web-project-b7d72.firebaseapp.com",
  projectId: "web-project-b7d72",
  storageBucket: "web-project-b7d72.appspot.com",
  messagingSenderId: "996759307570",
  appId: "1:996759307570:web:e742a5227b6ba84c13832b",
  measurementId: "G-749D1Q3B88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);