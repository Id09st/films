import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBg2sdzSdX1p0d1fivXUo_WkN9lDXmqsnA",
  authDomain: "films-login-c094d.firebaseapp.com",
  projectId: "films-login-c094d",
  storageBucket: "films-login-c094d.appspot.com",
  messagingSenderId: "907441004893",
  appId: "1:907441004893:web:17d22ef144d0511e70c8b4",
  measurementId: "G-0S5WCCLE7T",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
