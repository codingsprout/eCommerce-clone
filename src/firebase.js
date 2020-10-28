import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCz6z8kJq9-jLbE-QCEMJ_Ki7eAvaie_Ns',
  authDomain: 'shop-clone-babe8.firebaseapp.com',
  databaseURL: 'https://shop-clone-babe8.firebaseio.com',
  projectId: 'shop-clone-babe8',
  storageBucket: 'shop-clone-babe8.appspot.com',
  messagingSenderId: '118061060981',
  appId: '1:118061060981:web:6f66df12cd317dc3caf93c',
  measurementId: 'G-F701C6TH47',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };
