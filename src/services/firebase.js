import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");
require("firebase/firebase-firestore");
require("firebase/firebase-storage");
//import Store from "../store/index";
const firebaseConfig = {
  apiKey: "AIzaSyCuHMrAPIBOtvbcnWbVk3k82bK2LJ7asXI",
  authDomain: "onlineplatform-c273a.firebaseapp.com",
  databaseURL: "https://onlineplatform-c273a.firebaseio.com",
  projectId: "onlineplatform-c273a",
  storageBucket: "onlineplatform-c273a.appspot.com",
  messagingSenderId: "329074133329",
  appId: "1:329074133329:web:a2757687d33c142b706b70",
  measurementId: "G-DR288E6WF9"
};
firebase.initializeApp(firebaseConfig);

export default {
  firebase: firebase
};
