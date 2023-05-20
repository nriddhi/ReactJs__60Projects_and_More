import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPd990eqGplIfTdhrqAWQ5ajtaANQ9iE",
  authDomain: "ecom-auth-c7838.firebaseapp.com",
  projectId: "ecom-auth-c7838",
  storageBucket: "ecom-auth-c7838.appspot.com",
  messagingSenderId: "682320835110",
  appId: "1:682320835110:web:597801d1064bd472c3ece7",
  measurementId: "G-HLVBZXCR0D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
