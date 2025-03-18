import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUWHP3Yuv0J8I-pG3QNVTH5GI6pUwKmuQ",
  authDomain: "ince-c9053.firebaseapp.com",
  projectId: "ince-c9053",
  storageBucket: "ince-c9053.firebasestorage.app",
  messagingSenderId: "209965100006",
  appId: "1:209965100006:web:8aaaedc450d81c209a0427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
