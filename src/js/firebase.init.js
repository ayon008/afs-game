// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYHhzorndIQLw5hSXs_QyGSjEE6t3nbXo",
  authDomain: "afs-games.firebaseapp.com",
  projectId: "afs-games",
  storageBucket: "afs-games.appspot.com",
  messagingSenderId: "975118707864",
  appId: "1:975118707864:web:e1c3e38dcb9366f8aab4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;