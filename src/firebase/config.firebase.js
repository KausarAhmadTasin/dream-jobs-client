// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt3cM21sJvdOEnDm9d7ToFnYxhpEFL5oM",
  authDomain: "dream-jobs-fae96.firebaseapp.com",
  projectId: "dream-jobs-fae96",
  storageBucket: "dream-jobs-fae96.appspot.com",
  messagingSenderId: "1098819081592",
  appId: "1:1098819081592:web:e53366360d8ef76e3c648d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
