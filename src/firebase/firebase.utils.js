import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB0PHHd_P9jgu7Y_gP0Vm2ULkaTvaZTmsU",
	authDomain: "crwn-clothing-db-f160f.firebaseapp.com",
	projectId: "crwn-clothing-db-f160f",
	storageBucket: "crwn-clothing-db-f160f.appspot.com",
	messagingSenderId: "966299778078",
	appId: "1:966299778078:web:3364023b393dac85ac020f",
	measurementId: "G-P8M84LH58H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
