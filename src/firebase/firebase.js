import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXR_ydb4HxP7-goKhsNoT1K_ZmXzQfMKY",
  authDomain: "clone-58963.firebaseapp.com",
  databaseURL: "https://clone-58963.firebaseio.com",
  projectId: "clone-58963",
  storageBucket: "clone-58963.appspot.com",
  messagingSenderId: "867154564251",
  appId: "1:867154564251:web:178d8d5e72e3b49f28223e",
  measurementId: "G-WYBCYR8SYP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
