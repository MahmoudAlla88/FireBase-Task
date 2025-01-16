
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCVNPfnbN5dUaUBLbGpk_hTUQIhb5TOPtU",
    authDomain: "first-firebase-task-1ea2a.firebaseapp.com",
    projectId: "first-firebase-task-1ea2a",
    storageBucket: "first-firebase-task-1ea2a.firebasestorage.app",
    messagingSenderId: "562362279393",
    appId: "1:562362279393:web:b2cd035d022976dcdcdea0",
    measurementId: "G-TR054THTS7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
