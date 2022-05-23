// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEfJIc_xkp9n5KtEWAzFz92hLptB3vCis",
  authDomain: "marvel-dad0a.firebaseapp.com",
  projectId: "marvel-dad0a",
  storageBucket: "marvel-dad0a.appspot.com",
  messagingSenderId: "1098618487276",
  appId: "1:1098618487276:web:97a0ad94f47311a019c0c9",
  measurementId: "G-X7VQZ2LDDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);