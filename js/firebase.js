
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAVitbBperTmCHG4742uIZFF1Bjxbim3yo",
    authDomain: "hackathon-ea3ec.firebaseapp.com",
    projectId: "hackathon-ea3ec",
    storageBucket: "hackathon-ea3ec.appspot.com",
    messagingSenderId: "214915330437",
    appId: "1:214915330437:web:7c8555c1c34c1c1370d4ec",
    measurementId: "G-RTXB5TWVGM"
  };
  
  const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export {db,auth,storage}