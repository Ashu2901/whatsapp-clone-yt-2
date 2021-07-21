import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAg7oz51dA6ata6lBbahQ39mCBYGEEwvwM",
    authDomain: "whatsapp-clone-2-fd6db.firebaseapp.com",
    projectId: "whatsapp-clone-2-fd6db",
    storageBucket: "whatsapp-clone-2-fd6db.appspot.com",
    messagingSenderId: "836348606512",
    appId: "1:836348606512:web:9523025747263a36dad5f5"
  };


const app= !firebase.apps.length? firebase.initializeApp(firebaseConfig):firebase.app();
const db = app.firestore();
const auth=app.auth();


const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};