import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import "firebase/auth";
// import { auth} from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAquBREfW_cL-64n9IAlrLI3K0xKa_ixL8",
    authDomain: "clone-70f2c.firebaseapp.com",
    projectId: "clone-70f2c",
    storageBucket: "clone-70f2c.appspot.com",
    messagingSenderId: "271388968471",
    appId: "1:271388968471:web:e3e0316f92d8cede09fe52"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };