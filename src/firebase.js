import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4wkCTOjtJM3hg3vvaZZhp8BkD4ZVooRQ",
    authDomain: "recipe-dc08f.firebaseapp.com",
    projectId: "recipe-dc08f",
    storageBucket: "recipe-dc08f.appspot.com",
    messagingSenderId: "214920692431",
    appId: "1:214920692431:web:ece26d108e24d1a7b12dba",
    measurementId: "G-86BR1DX90S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
