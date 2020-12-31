import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD97FFBsRhO8G6OkzAdejd2yP3UN80kWgs",
    authDomain: "crwn-db-1aa94.firebaseapp.com",
    projectId: "crwn-db-1aa94",
    storageBucket: "crwn-db-1aa94.appspot.com",
    messagingSenderId: "25947053128",
    appId: "1:25947053128:web:c5c080c96e8336b036cc7d"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
