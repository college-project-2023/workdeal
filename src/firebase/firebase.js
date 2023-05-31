import { getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJY27z7WlHopWx_eDBgi9hk4Q4LEWl4rc",
  authDomain: "workdeal-6b31e.firebaseapp.com",
  projectId: "workdeal-6b31e",
  storageBucket: "workdeal-6b31e.appspot.com",
  messagingSenderId: "1001913204216",
  appId: "1:1001913204216:web:9267460c718890df10aa0d",
  measurementId: "G-D9Y9ZTWHM0"
}
 
var app = null;
var auth = null;

if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}



export { auth }