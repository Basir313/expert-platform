import firebaseapp from "./firebase";
import fireLogin from "./UserLogin";
import fireCreate from "./CreatAccount";
import store from "../store/index"

var fireStorage = firebaseapp.firebase.storage();

export default {
  fileName: "",
  uploadUserPicProfile(image) {
    var refStorage = fireStorage.ref("userImage/");
    var filename = this.getUserFileName();
    var refUserProfile = refStorage.child(filename);
    refUserProfile.put(image).then(snapshot => {
      var userId = store.state.user.user.uid;
      snapshot.ref.getDownloadURL().then(url => {
        fireCreate.updatingUserImageUrl(userId, url);
      });
    });
  },
  getUserFileName() {
    var filename = fireLogin.getCurrentUser();
    return filename;
  },
  uploadeUserCv(cv) {
    var refStorage = fireStorage.ref("userCv");
    var fileName = this.getUserFileName();
    var refUserCv = refStorage.child(fileName);
    refUserCv.put(cv).then(snapshot => {
      snapshot.ref.getDownloadURL().then(url => {
        fireCreate.AddUserCV(url, fileName);
     });
    });
  }
};
