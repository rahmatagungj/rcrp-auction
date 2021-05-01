import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBq50UhxwZPkNxumMMWYYWgGx8mfnLG_SE",
    authDomain: "rcrp-auction.firebaseapp.com",
    databaseURL: "https://rcrp-auction-default-rtdb.firebaseio.com",
    projectId: "rcrp-auction",
    storageBucket: "rcrp-auction.appspot.com",
    messagingSenderId: "303150921621",
    appId: "1:303150921621:web:89641b4554ba244b2ca89c"
};

export default firebase.initializeApp(firebaseConfig);