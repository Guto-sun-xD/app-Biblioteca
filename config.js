import firebase from "firebase"
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyB2lNldWNi3fubcGEbofeTDJ_4wqOTGJFQ",
  authDomain: "biblioteca-e6f89.firebaseapp.com",
  projectId: "biblioteca-e6f89",
  storageBucket: "biblioteca-e6f89.appspot.com",
  messagingSenderId: "334310748254",
  appId: "1:334310748254:web:213ef13623e85e87c0c4cf"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()