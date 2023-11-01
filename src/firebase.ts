import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoQc_EQ-oEWJ98-CDaXLjdVpM7X6ZjiwY",
  authDomain: "nwitter-reloaded-8bd76.firebaseapp.com",
  projectId: "nwitter-reloaded-8bd76",
  storageBucket: "nwitter-reloaded-8bd76.appspot.com",
  messagingSenderId: "636138544212",
  appId: "1:636138544212:web:46f7f264396f7455fa61c1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);