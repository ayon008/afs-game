// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD11uQEw-ScTr42WHRw_DSOdQURwD7QEMY",
    authDomain: "afs-runs.firebaseapp.com",
    projectId: "afs-runs",
    storageBucket: "afs-runs.appspot.com",
    messagingSenderId: "608480532098",
    appId: "1:608480532098:web:f0fbce4acf0ad08438869b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;