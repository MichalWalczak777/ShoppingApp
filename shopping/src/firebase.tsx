import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBeIZHPyby8PTGk4QXVJzaPMf8m2VMraWE",
  authDomain: "ecommerce-clothes-e0ba2.firebaseapp.com",
  projectId: "ecommerce-clothes-e0ba2",
  storageBucket: "ecommerce-clothes-e0ba2.appspot.com",
  messagingSenderId: "596515683215",
  appId: "1:596515683215:web:0e54cefd319a591efa29fa",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
