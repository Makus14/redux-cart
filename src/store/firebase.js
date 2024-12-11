import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB01ufxlWs3sRm1NTgTF0w3fENgJ6kO-UE",
  authDomain: "redux-cart-92248.firebaseapp.com",
  projectId: "redux-cart-92248",
  storageBucket: "redux-cart-92248.firebasestorage.app",
  messagingSenderId: "1053882263793",
  appId: "1:1053882263793:web:01f0ac24b6a5a81675e150"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, ref, set };