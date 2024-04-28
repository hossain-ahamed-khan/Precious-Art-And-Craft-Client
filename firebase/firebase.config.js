// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUDCEABnABv4qL8yuasY1h7q8HYPEOjEk",
    authDomain: "art-and-crafts-feba1.firebaseapp.com",
    projectId: "art-and-crafts-feba1",
    storageBucket: "art-and-crafts-feba1.appspot.com",
    messagingSenderId: "561077403494",
    appId: "1:561077403494:web:1134a016bcded65ec612a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;