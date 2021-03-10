import firebase from "firebase";
 
const firebaseConfig = {
  apiKey: "AIzaSyA_vm074OogpZtfeclGsrlx8Ti-9wa8DNc",
  authDomain: "whatsapp-clone-bb26a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-bb26a-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-bb26a",
  storageBucket: "whatsapp-clone-bb26a.appspot.com",
  messagingSenderId: "1055709866450",
  appId: "1:1055709866450:web:dad36c54f9efd61f19c00b",
  measurementId: "G-ETT4Z7XXBF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;