// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDoc,setDoc,addDoc,doc,Timestamp } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQvmmjidgIW-ecVxyFQltwPBPeIv7WuIM",
  authDomain: "master-your-soul.firebaseapp.com",
  projectId: "master-your-soul",
  storageBucket: "master-your-soul.appspot.com",
  messagingSenderId: "416921372233",
  appId: "1:416921372233:web:ffbd9365d1c15b98e16198",
  measurementId: "G-KWNLJMRPY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const userCollection = collection(db, "users")
export {app,userCollection,getDoc,db,setDoc,addDoc,doc,Timestamp}
// const analytics = getAnalytics(app);