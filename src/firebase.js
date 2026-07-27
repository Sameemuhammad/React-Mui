import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjAGuzdRydMF-q3MIpJGch8dFmpT3x3lc",
  authDomain: "second-project-33d27.firebaseapp.com",
  projectId: "second-project-33d27",
  storageBucket: "second-project-33d27.firebasestorage.app",
  messagingSenderId: "1030588690874",
  appId: "1:1030588690874:web:dccfc7100aa635d6bcad83",
  measurementId: "G-YMG5L5NF16"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;