// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA7WmHa3xn-OnS7NTvlM9sLgeFALo0X-Uo",
  authDomain: "tickets-75bdf.firebaseapp.com",
  projectId: "tickets-75bdf",
  storageBucket: "tickets-75bdf.appspot.com",
  messagingSenderId: "932936997046",
  appId: "1:932936997046:web:2417e975aa2d242da0ee17",
  measurementId: "G-447V5Y64KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);