import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqklmotqxYp1OhCacBRF1ogQe6qFFzfFY",
    authDomain: "chat-app-4a3c5.firebaseapp.com",
    projectId: "chat-app-4a3c5",
    storageBucket: "chat-app-4a3c5.appspot.com",
    messagingSenderId: "968351453738",
    appId: "1:968351453738:web:4fda76efc4a516f7ae2953"
};


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };