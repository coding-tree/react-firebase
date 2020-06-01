import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAviCv1bIu3m5vK4koojfqTLOp6_dxt_9c",
    authDomain: "fir-sandbox-e0faa.firebaseapp.com",
    databaseURL: "https://fir-sandbox-e0faa.firebaseio.com",
    projectId: "fir-sandbox-e0faa",
    storageBucket: "fir-sandbox-e0faa.appspot.com",
    messagingSenderId: "380283886176",
    appId: "1:380283886176:web:486504b7ebee0929dd4105"
  };

firebase.initializeApp(firebaseConfig);

export default firebase