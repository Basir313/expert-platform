import firebase from "./firebase";
const fireDatabase = firebase.firebase.database();
export default {
  EditLinkdenAccount(userLinkden, userId) {
    const fireRefUser = fireDatabase.ref("/users/" + userId + "/").key;
    if (fireRefUser == userId) {
      var refToUpdate = fireDatabase
        .ref("/users/" + userId + "/")
        .orderByChild("userID")
        .equalTo(userId);
      refToUpdate.once("child_added", function(snapshot) {
        snapshot.ref.update({
          linkdenAccount: userLinkden
        });
      });
    }
  },
  AddHeadLineAndBio(UserInfo, userId) {
    const refUserKey = fireDatabase.ref("/users/" + userId + "/").key;
    if (refUserKey == userId) {
      fireDatabase
        .ref("/users/" + userId + "/bio")
        .set(UserInfo)
        .catch(err => {
          return err;
        });
    }
  },
  AddWorkExperience(userInfo, userId) {
    const refUserKey = fireDatabase.ref("/users/" + userId + "/").key;
    if (refUserKey == userId) {
      fireDatabase
        .ref("/users/" + userId + "/workExperience/")
        .push()
        .set(userInfo)
        .catch(err => {
          return err;
        }).catch(error =>{
          console.log(error)
        })
    }
  },
  AddEducation(userId, userInfo){
    const refUserKey = fireDatabase.ref("/users/" + userId + "/").key;
    if (refUserKey == userId) {
      fireDatabase
        .ref("/users/" + userId + "/education")
        .child(userInfo.degree)
        .set(userInfo)
        .catch(err => {
          return err;
        }).catch(error =>{
          console.log(error);
        });
    }
  }
};
