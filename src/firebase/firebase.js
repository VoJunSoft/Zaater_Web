// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, onSnapshot } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1AJ0cfCqfIiokFfbqOy9o-hpu2PJEkaA",
    authDomain: "zaater-e1c56.firebaseapp.com",
    projectId: "zaater-e1c56",
    storageBucket: "zaater-e1c56.appspot.com",
    messagingSenderId: "309828849149",
    appId: "1:309828849149:web:0f230b7a75ec494b1fdd94",
    measurementId: "G-X07B41GL6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default getFirestore(app)

