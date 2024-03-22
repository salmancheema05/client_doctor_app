import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjySo1MM5Oye0dHRkfHikOFbhbvyxtJYQ",
  authDomain: "doctor-app-bc7e8.firebaseapp.com",
  projectId: "doctor-app-bc7e8",
  storageBucket: "doctor-app-bc7e8.appspot.com",
  messagingSenderId: "160616692570",
  appId: "1:160616692570:web:f2ff96873eb6b4f1b95163",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
