import app from 'firebase/app';
import "firebase/auth";
import { firebaseConfig } from './config';

export default class FirebaseHandler {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }

        this.auth = app.auth();
    }

    // Auth API
    
    signInEmailPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut = () => {
        return this.auth.signOut();
    }

    resetPassword = (email) => {
        return this.auth.sendPasswordResetEmail(email);
    }

    // Jobs API

    upsertJob = (order) => {

    }

    deleteJob = (orderId) => {

    }
}