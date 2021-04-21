import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as user from "./modules/LoginUserState";
import * as notification from "./modules/notification";
import * as progress from "./modules/progress";
import fireCreatAccount from "../services/CreatAccount";
import fireLogin from "../services/UserLogin";
import createProfile from "../services/createProfile";
import * as cv from "./modules/cvState";
import * as bio from "./modules/bioState";
import * as work from "./modules/workExperienceState";
import * as education from "./modules/educationState";
import * as projects from "./modules/projects";
import * as clients from "./modules/clients";
import * as consulates from "./modules/consulating";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    notification,
    progress,
    education,
    cv,
    bio,
    work,
    projects,
    clients,
    consulates
  },
  state: {
    result: {}
  },
  getters: {},
  mutations: {
    SET_RESULT(state, paylod) {
      state.result = paylod;
    }
  },
  actions: {
    // action method for create user expert account
    creatExpertUser({ commit }, userExpertData) {
      var expertAccount = fireCreatAccount.createNewUser(userExpertData);
      if (expertAccount) {
        commit("SET_USER_INFO", expertAccount);
        return true;
      } else {
        commit("SET_USER_INFO", expertAccount);
        return expertAccount;
      }
    },
    set_result({ commit }, paylod) {
      commit("SET_RESULT", paylod);
    },

    // action method for create comapny acctount
    createCompanyUser({ commit }, companyData) {
      var companyAccount = fireCreatAccount.cretteNewUserCompany(companyData);
      if (companyAccount) {
        commit("SET_USER_INFO", companyAccount);
        return companyAccount;
      } else {
        return companyAccount;
      }
    },
    updateLinkdenAccount(linkden) {
      var userId = fireLogin.getCurrentUser().uid;
      createProfile.EditLinkdenAccount(linkden, userId);
    }
  },
  plugins: [createPersistedState()]
});
