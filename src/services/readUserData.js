import firebaseapp from "./firebase";
import store from "../store/index";
var fireDatabase = firebaseapp.firebase.database();

export default {
  getUserInfo(userId) {
    var userRef = fireDatabase.ref("users/" + userId + "/parsonal_info");
    return userRef;
  },
  getUserEducation() {
    var userId = store.state.user.user.uid;
    var educationRef = fireDatabase.ref("users/" + userId + "/education/");
    educationRef.on("value", function(snapshot) {
      if (snapshot.hasChildren) {
        store.dispatch("setEducation", snapshot.val());
      } else {
        var notification = {
          model: true,
          timeout: 3000,
          color: "red",
          message: "Place add your education backround"
        };
        store.dispatch("notification/add", notification, { root: true });
      }
    });
  },
  getBio() {
    var userId = store.state.user.user.uid;
    var bio = fireDatabase.ref("users/" + userId + "/bio");
    bio.on("value", function(snapshot) {
      if (snapshot.hasChild("bio")) {
        store.dispatch("setBioAction", snapshot.val());
      } else {
        var notification = {
          model: true,
          timeout: 3000,
          color: "red",
          message: "Place add your bio info"
        };
        store.dispatch("notification/add", notification, { root: true });
      }
    });
  },
  getCV() {
    var userId = store.state.user.user.uid;
    var cv = fireDatabase.ref("users/" + userId + "/cv");
    cv.on("value", function(snapshot) {
      if (snapshot.hasChild("cv")) {
        store.dispatch("setUserCv", snapshot.val().cv);
      } else {
        var notification = {
          model: true,
          timeout: 3000,
          color: "red",
          message: "Place uplode your cv"
        };
        store.dispatch("notification/add", notification, { root: true });
      }
    });
  },
  getWorkExperience() {
    var userId = store.state.user.user.uid;
    var work = fireDatabase.ref("users/" + userId + "/workExperience/");
    work.on("value", function(snapshot) {
      if (snapshot.hasChildren()) {
        store.dispatch("setWork", snapshot.val());
      } else {
        var notification = {
          model: true,
          timeout: 3000,
          color: "red",
          message: "Place add your work Experice"
        };
        store.dispatch("notification/add", notification, { root: true });
      }
    });
  }
};
