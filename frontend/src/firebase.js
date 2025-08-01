// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8cK3sJ3hNbpxriDhKl2edg7QhtZx9Mm4",
  authDomain: "e-commerence-full-stack-web.firebaseapp.com",
  projectId: "e-commerence-full-stack-web",
  storageBucket: "e-commerence-full-stack-web.firebasestorage.app",
  messagingSenderId: "351069731295",
  appId: "1:351069731295:web:198c3cb67a3fff3a382c6a",
  measurementId: "G-X88VNNVHT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);