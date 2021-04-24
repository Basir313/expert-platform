import firebaseapp from "./firebase";
import store from "../store/index";

const database = firebaseapp.firebase.database();

export default {
  createProject(info) {
    const result = {};
    var userId = store.state.user.user.uid;
    info.created_at = firebaseapp.firebase.database.ServerValue.TIMESTAMP;
    info.status = "pending";
    info.ower = userId;
    const project_ref = database.ref("/projects/" + userId + "/");
    info.id = project_ref.push().key;
    project_ref
      .push()
      .set(info)
      .then(function() {
        store.dispatch("progress/add", false);
      })
      .catch(function() {
        result.status = "0";
      });
    return result;
  }
};
