import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCtdJm8pmPjivFGWinnBZGJ1Y5fexuQiLQ",
    authDomain: "haven-1564356678440.firebaseapp.com",
    databaseURL: "https://haven-1564356678440.firebaseio.com",
    projectId: "haven-1564356678440",
    storageBucket: "haven-1564356678440.appspot.com",
    messagingSenderId: "1002469829102",
    appId: "1:1002469829102:web:37dd29018d2751ceb086ff",
    measurementId: "G-VF3GMLGP62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase