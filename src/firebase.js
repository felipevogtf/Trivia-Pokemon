import firebase from 'firebase/app'
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCEa8wt87eUPcZIoglrFuR4k6mtt3ghmOU",
    authDomain: "cuanto-sabes-de-pokemon.firebaseapp.com",
    projectId: "cuanto-sabes-de-pokemon",
    storageBucket: "cuanto-sabes-de-pokemon.appspot.com",
    messagingSenderId: "590423069025",
    appId: "1:590423069025:web:0053a7b8aa09d13d2e7520"
};

firebase.initializeApp(config);

export const db = firebase.firestore();