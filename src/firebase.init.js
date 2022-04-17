// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyD481ZpVZKkJYiswtUHn3QMyrliLKq_M3o",
    // authDomain: "denti-care-b5058.firebaseapp.com",
    // projectId: "denti-care-b5058",
    // storageBucket: "denti-care-b5058.appspot.com",
    // messagingSenderId: "490305148772",
    // appId: "1:490305148772:web:9dcae46435bc6ed19e4c71"
  
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;