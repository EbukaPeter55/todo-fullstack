import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAiDL48vNWLQIfXoVCHGDPB7zKafJGwVLA",
    authDomain: "todo-ninja-abf60.firebaseapp.com",
    databaseURL: "https://todo-ninja-abf60.firebaseio.com",
    projectId: "todo-ninja-abf60",
    storageBucket: "todo-ninja-abf60.appspot.com",
    messagingSenderId: "122196771579",
    appId: "1:122196771579:web:9a5ca8dc79522bdf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true});

  export default db; 