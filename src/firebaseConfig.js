// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyANqyzUslmB3uDeQMKw9sDkn8I6tvHy0-k",
  authDomain: "maltimart-201a2.firebaseapp.com",
  projectId: "maltimart-201a2",
  storageBucket: "maltimart-201a2.firebasestorage.app",
  messagingSenderId: "443718562438",
  appId: "1:443718562438:web:963360c5e0e540490f5707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app
