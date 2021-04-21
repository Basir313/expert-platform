import firebaseapp from "./firebase";
import store from "../store/index";
const database = firebaseapp.firebase.database();

export default {
  getuserProject(userId) {
    var refProject = database.ref("users/" + userId + "/");
    return refProject;
  },
  getAllProject() {
    //var result = [];
    var userId = store.state.user.user.uid;
    var project_ref = database.ref("projects/" + userId + "/");
    project_ref.on("value", function(snapshot) {
      if (snapshot.hasChildren) {
        try {
          store.dispatch("projects/set_poject", snapshot.val());
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
};
