// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDym0thiaM5ReCFWCFvYYg5Y5y5qaf3NVs",
  authDomain: "the-cafe-project.firebaseapp.com",
  projectId: "the-cafe-project",
  storageBucket: "the-cafe-project.appspot.com",
  messagingSenderId: "601613486309",
  appId: "1:601613486309:web:26da50a0671443bbdb6c0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app