import firebaseapp from "../services/firebase";
var firebase = firebaseapp.firebase;
export default {
  loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  getCurrentUser() {
    return firebase.auth().currentUser.uid;
  },
  getAthuUser() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return user;
      } else {
        return "user no sign in";
      }
    });
  },
  userLogout() {
    return firebase.auth().signOut();
  }
};
