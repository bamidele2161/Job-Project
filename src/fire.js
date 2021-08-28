import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDDkBek6HeNeo9d6klLE0LMls4U2AvhOWs",
    authDomain: "socialape-c04f2.firebaseapp.com",
    projectId: "socialape-c04f2",
    storageBucket: "socialape-c04f2.appspot.com",
    messagingSenderId: "153740464797",
    appId: "1:153740464797:web:2f9e8960a68e7669e37a74",
    measurementId: "G-BXWS4HBCK1"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
   export default fire;