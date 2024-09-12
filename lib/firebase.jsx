
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDbq8YaPMYzBIPAQ4g6p_qbAOGYFkKqnMU",
  authDomain: "bloghunt007.firebaseapp.com",
  projectId: "bloghunt007",
  storageBucket: "bloghunt007.appspot.com",
  messagingSenderId: "789838046339",
  appId: "1:789838046339:web:08de3ddb78a9b653f8a7b6",
  measurementId: "G-6ZZ0Z527XX"
};


const app = initializeApp(firebaseConfig);


export const db= getFirestore();
export const auth=getAuth();