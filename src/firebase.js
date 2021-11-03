import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDuWNnoHF__qdx7ZlAqlyKYN7NefJ_gkHM",
  authDomain: "clone-439a9.firebaseapp.com",
  projectId: "clone-439a9",
  storageBucket: "clone-439a9.appspot.com",
  messagingSenderId: "703390110839",
  appId: "1:703390110839:web:3d9a0cc60740f4db14e272",
  measurementId: "G-MPCSD81TQ4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };