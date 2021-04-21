import firebaseapp from "../services/firebase";
var database = firebaseapp.firebase.database();
var firebase = firebaseapp.firebase;
export default {
  createNewUser(userData) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(user => {
        userData.type = "expert";
        this.insertDataToUser(userData, user);
        return true;
      })
      .catch(error => {
        return error;
      });
  },
  cretteNewUserCompany(company) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(company.email, company.password)
      .then(user => {
        company.type = "Company";
        this.insertDataCompany(company, user);
        this.insertDataToUser(company, user);
        return true;
      })
      .catch(error => {
        return error;
      });
  },
  insertDataToUser(userinfo, userId) {
    var userRef = database
      .ref("/users/" + userId.user.uid)
      .child("parsonal_info");
    userRef.set(
      {
        userID: userId.user.uid,
        name: userinfo.name,
        lastName: userinfo.lastName,
        phone: userinfo.phone,
        email: userinfo.email,
        country: userinfo.country,
        city: userinfo.city,
        userType: userinfo.type,
        photoUrl: ""
      },
      error => {
        if (error) {
          return error;
        }
      }
    );
  },
  insertDataCompany(companyInfo, userId) {
    var companyRef = database
      .ref("/companies/" + userId.user.uid)
      .child("company_info");
    companyRef.set(
      {
        compayOwnerId: userId.user.uid + companyInfo.companyName,
        comName: companyInfo.companyName,
        comWebLink: companyInfo.companyWebLink,
        comAddress: companyInfo.comAddress
      },
      error => {
        if (error) {
          return error;
        }
      }
    );
  },
  updatingUserImageUrl(userId, url) {
    var userref = database.ref("/users/" + userId).key;
    if (userref == userId) {
      var ref = database
        .ref("/users/" + userId + "/")
        .orderByChild("userID")
        .equalTo(userId);
      ref.once("child_added", function(snapshot) {
        snapshot.ref.update({
          photoUrl: url
        });
      });
    } else {
      return "not much";
    }
  },
  AddUserCV(cv, userId) {
    var userref = database.ref("/users/" + userId + "/").key;
    if (userref == userId) {
      database.ref("/users/" + userId + "/cv").set({
        cv: cv
      });
    } else {
      return "not much";
    }
  }
};
