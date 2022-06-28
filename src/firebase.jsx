import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcs74UokeFTc41CZZQ-7QXMRIV4t_vq4Y",
  authDomain: "ecommerce-ed609.firebaseapp.com",
  projectId: "ecommerce-ed609",
  storageBucket: "ecommerce-ed609.appspot.com",
  messagingSenderId: "458395549685",
  appId: "1:458395549685:web:5056a36d9033badcc32abc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };