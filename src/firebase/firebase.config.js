// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      
  apiKey:import.meta.env.VITE_apiKey, 
  authDomain:import.meta.env.VITE_authDomain, 
  projectId:import.meta.env.VITE_projectId, 
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId, 
  appId:import.meta.env.VITE_appId, 
  measurementId:import.meta.env.VITE_measurementId, 

      // apiKey: "AIzaSyAMJShQ1CGhhuJqDrL2PSIEDYwUnA5oqII",
      // authDomain: "car-doctor-client-86110.firebaseapp.com",
      // projectId: "car-doctor-client-86110",
      // storageBucket: "car-doctor-client-86110.firebasestorage.app",
      // messagingSenderId: "390500187547",
      // appId: "1:390500187547:web:ce78e3960de8fae627353e",
      // measurementId: "G-NF9SCXR1CN"


  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;