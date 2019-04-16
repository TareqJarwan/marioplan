import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-N_ly4IsLkmKPrz-j3BPFkMgDSj6IKiY",
    authDomain: "net-ninja-marioplan-f2271.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-f2271.firebaseio.com",
    projectId: "net-ninja-marioplan-f2271",
    storageBucket: "net-ninja-marioplan-f2271.appspot.com",
    messagingSenderId: "358755888127"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;