import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBTfpsUn_O09s8L1QsYssvYRfTDSxR3eQ",
    authDomain: "expensetracker-ea1ff.firebaseapp.com",
    projectId: "expensetracker-ea1ff",
    storageBucket: "expensetracker-ea1ff.firebasestorage.app",
    messagingSenderId: "563015146794",
    appId: "1:563015146794:web:adf77d055a5700d0169253",
    measurementId: "G-ECCK0Z91Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, db, googleProvider, signInWithPopup, signOut };
