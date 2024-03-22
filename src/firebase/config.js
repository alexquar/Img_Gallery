import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDqRn-bASuhn8SE5_JpTU0FjoPi1jhxqaI",
    authDomain: "img-u-social.firebaseapp.com",
    projectId: "img-u-social",
    storageBucket: "img-u-social.appspot.com",
    messagingSenderId: "89787067327",
    appId: "1:89787067327:web:039e1b31f9c6e3882ccf0a",
    measurementId: "G-275RSH9DNJ"
  };


  firebase.initializeApp(firebaseConfig)

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  export { projectStorage, projectFirestore, timestamp }