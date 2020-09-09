import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRESTORE_DB_URL,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
  measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

// const storage = firebase.storage();
// const database = firebase.database();

export default firebase;
