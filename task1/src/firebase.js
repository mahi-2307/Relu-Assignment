
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDIno6TfeBpLVzG-OIdR3mIYouN48AcMNQ",
  authDomain: "relu-d29e5.firebaseapp.com",
  projectId: "relu-d29e5",
  storageBucket: "relu-d29e5.appspot.com",
  messagingSenderId: "89171880293",
  appId: "1:89171880293:web:4d21c310313492b7c2d98c",
  measurementId: "G-6R8RMMSWT0"
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)