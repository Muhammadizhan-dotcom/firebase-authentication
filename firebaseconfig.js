import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKYkWMcOWhRjrVIPWWdSAjlZtAWxy7Vh4",
  authDomain: "fir-authentication-011.firebaseapp.com",
  projectId: "fir-authentication-011",
  storageBucket: "fir-authentication-011.appspot.com",
  messagingSenderId: "685760276808",
  appId: "1:685760276808:web:dbab07d340d23364a16b7d",
  measurementId: "G-R925D365P2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
