// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "regalestaterentals.firebaseapp.com",
	projectId: "regalestaterentals",
	storageBucket: "regalestaterentals.appspot.com",
	messagingSenderId: "261925487291",
	appId: "1:261925487291:web:255b43494fcd9464b6df9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
