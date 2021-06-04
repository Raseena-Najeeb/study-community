import firebase from "firebase";

require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyCvf7116VW4pDCUr4zgLeFh0HCoBQOaNog",
    authDomain: "study-community.firebaseapp.com",
    projectId: "study-community",
    storageBucket: "study-community.appspot.com",
    messagingSenderId: "1005252872301",
    appId: "1:1005252872301:web:d173516bbf2f2ddd4bd764"
  };

  if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig); 
  } 
export default firebase.firestore()