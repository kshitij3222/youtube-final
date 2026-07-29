import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYQfS5u1e-n5iITUm-qnhu8p-nuacr888",
  authDomain: "clone-c1d1b.firebaseapp.com",
  projectId: "clone-c1d1b",
  storageBucket: "clone-c1d1b.firebasestorage.app",
  messagingSenderId: "820151962926",
  appId: "1:820151962926:web:38402ac630d2c737e8febf",
  measurementId: "G-JK9N955W4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics (optional)
const analytics = getAnalytics(app);

// Storage (your existing project needs this)
export const storage = getStorage(app);

// Authentication (new)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;