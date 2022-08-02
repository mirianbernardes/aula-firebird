import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOm8hC6p5g8biDaXbzxTzMcPnCY_HRKCg",
  authDomain: "miaulafirebase.firebaseapp.com",
  projectId: "miaulafirebase",
  storageBucket: "miaulafirebase.appspot.com",
  messagingSenderId: "529401068551",
  appId: "1:529401068551:web:e67cac243525fb7f673ea2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app, auth}