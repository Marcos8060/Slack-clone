import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7VfWyoZ3nBfaq1RkX_Xo1NrY1n-DmF3k",
  authDomain: "slack-clone-9e062.firebaseapp.com",
  projectId: "slack-clone-9e062",
  storageBucket: "slack-clone-9e062.appspot.com",
  messagingSenderId: "641941541303",
  appId: "1:641941541303:web:c446e91ee4b9d41fcb1832",
  measurementId: "G-F3XDKXFM6X"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db; 
  export  { provider,auth};