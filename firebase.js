import { initializeApp } from "firebase/app";
import { getAuth, signOut , signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA5OIClDw139cty3nl5Lx6SpP9figCT1cg",
    authDomain: "fir-77cd7.firebaseapp.com",
    projectId: "fir-77cd7",
    storageBucket: "fir-77cd7.appspot.com",
    messagingSenderId: "713527312857",
    appId: "1:713527312857:web:aa2420320a709f933659c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, provider);
        console.log("Successfully signed in with Google");
        return true;
    }
    catch (error) {
        console.log("Hey Afzal there is an error" + error);
        return false;
    }
}

export const signInWithFacebook = async () => {
    try {
        await signInWithPopup(auth, provider);
        console.log("Successfully signed in with Facebook");
        return true;
    }
    catch (error) {
        console.log("Hey Afzal there is an error" + error);
        return false;
    }
}

export const signInWithGithub = async () => {
    try {
        await signInWithPopup(auth, provider);
        console.log("Successfully signed in with Github");
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

export const signOut1 = () => {
    auth.signOut().then(() => {
        console.log("Successfully signed out");
    }).catch(error => {
        console.log("Error signing out: " + error);
    });
}



