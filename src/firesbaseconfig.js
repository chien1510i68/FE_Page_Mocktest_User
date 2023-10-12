import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiU_k_9z5jNWY8JOvXBe8U7G-yMSQOX_M",
  authDomain: "uploadfileinmocktest.firebaseapp.com",
  projectId: "uploadfileinmocktest",
  storageBucket: "uploadfileinmocktest.appspot.com",
  messagingSenderId: "41498919598",
  appId: "1:41498919598:web:34148c126b63ed9c6ee33f",
  measurementId: "G-VVNY7G2791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
