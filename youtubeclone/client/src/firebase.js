import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjdtcJMgSwRG7tk0Cc20n8lZjEbMhG5GY",
  authDomain: "clone-46d38.firebaseapp.com",
  projectId: "clone-46d38",
  storageBucket: "clone-46d38.appspot.com",
  messagingSenderId: "948341793970",
  appId: "1:948341793970:web:58e82dc976e05df35715ab",
  measurementId: "G-J7FH52X83K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
