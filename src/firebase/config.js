import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJQhtJXZ067bzjskAq1nY78a6VfMhlUTM",
  authDomain: "miaoandzhi-a7b7c.firebaseapp.com",
  projectId: "miaoandzhi-a7b7c",
  storageBucket: "miaoandzhi-a7b7c.appspot.com",
  messagingSenderId: "116239201086",
  appId: "1:116239201086:web:7ba81bdc77fc888bcbf26f",
  measurementId: "G-FSRSD28MS7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); 