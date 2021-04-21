/* eslint-disable no-unused-vars */
import LoginService from "../../services/UserLogin";
import ReadData from "../../services/readUserData";
import router from "../../router/index";
export const namespaces = true;
export const state = {
  user: [],
  info: []
};
export const mutations = {
  SET_USER_STATE(state, user) {
    state.user = user;
  },
  SET_INFO(state, info) {
    state.info = info;
  }
};

export const actions = {
  setUserData({ commit }, user) {
    commit("SET_USER_STATE", user);
  },
  setInfo({ commit }, info) {
    commit("SET_INFO", info);
  },
  Login({ dispatch, state }, user) {
    dispatch("add", true);
    LoginService.loginUser(user.email, user.password)
      .then(data => {
        const info = {
          userVarify: data.user.emailVerified,
          email: data.user.email,
          uid: data.user.uid,
          login: true
        };
        if (info.userVarify) {
          dispatch("setUserData", info);
          var v = ReadData.getUserInfo(data.user.uid);
          console.log(v);
          router.push({ name: "UserDashboard" });
          location.reload();
          const notification = {
            model: true,
            timeout: 3000,
            color: "green",
            type: "red--text",
            message: "Wellcome to Platform"
          };
          dispatch("add", false);
          dispatch("notification/add", notification, { roo: true });
          ReadData.getUserInfo(state.user.uid);
        } else {
          router.push({ name: "EamilVerifacation" });
        }
      })
      .catch(error => {
        dispatch("add", "false");
        const notification = {
          model: true,
          timeout: 3000,
          color: "red",
          type: "red--text",
          message: "There was a problem with fetching event: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      });
  },
  logout({ state }) {
    LoginService.userLogout().then(() => {
      state.user = null;
      localStorage.clear();
      router.push({ path: "/" });
      location.reload();
    });
  }
};
