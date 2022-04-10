import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB-rFkfxNrAYcW6O9AYtDgIwz3a_qHKww8",
    authDomain: "shopify-ecom.firebaseapp.com",
    projectId: "shopify-ecom",
    storageBucket: "shopify-ecom.appspot.com",
    messagingSenderId: "90936110830",
    appId: "1:90936110830:web:1ec5cfab56b9f87dd3cdff"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)