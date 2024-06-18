import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUcIKFAJ3NTsUrFZv4CFMZKJIwBMZCd3g",
  authDomain: "desafio3-fce5f.firebaseapp.com",
  projectId: "desafio3-fce5f",
  storageBucket: "desafio3-fce5f.appspot.com",
  messagingSenderId: "217441530662",
  appId: "1:217441530662:web:d3f8bb1eda79e69b1747e7",
  measurementId: "G-RH1DZSK8TE",
};

export const auth = getAuth(initializeApp(firebaseConfig));
export const googleProvider = new GoogleAuthProvider();
