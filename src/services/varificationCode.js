import firebaseapp from "../services/firebase";
var firebase = firebaseapp.firebase;
export default {
  sendEmailVerification() {
    return firebase.auth().currentUser.sendEmailVerification();
  }
};
