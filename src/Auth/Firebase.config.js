import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyK8wmRy3VR0MXXG0ndMW270-ON79hIhY",
  authDomain: "openleasedb.firebaseapp.com",
  databaseURL: "2FQhe5nLQ9j1mNMiRZlurb",
  projectId: "openleasedb",
  storageBucket: "openleasedb.appspot.com",
  messagingSenderId: "398881563889",
  appId: "1:398881563889:web:315ccd282408d6fe14f550",
  measurementId: "G-49K8599947",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;