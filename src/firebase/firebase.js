import { getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSEGE_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESSUREMENT_ID
}
 
var app = null;
var user=null;
var auth = null;

if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

if(auth!=null){
  user=auth.currentUser;
}else{
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  user=auth.currentUser;
}

export {user}

export { auth }