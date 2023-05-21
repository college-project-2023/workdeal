import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "workdeal-6b31e.firebaseapp.com",
  projectId: "workdeal-6b31e",
  storageBucket: "workdeal-6b31e.appspot.com",
  messagingSenderId: "1001913204216",
  appId: "1:1001913204216:web:9267460c718890df10aa0d",
  measurementId: "G-D9Y9ZTWHM0"
}


// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}

