// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCvyy_EKcQsdoOIZtSOqLNIVoeZf0Ghf8",
  authDomain: "local-advancer-guide.firebaseapp.com",
  projectId: "local-advancer-guide",
  storageBucket: "local-advancer-guide.appspot.com",
  messagingSenderId: "232330145620",
  appId: "1:232330145620:web:ac8a9a34a820208481a2c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;