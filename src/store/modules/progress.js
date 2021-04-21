import Vue from "vue";

export const namespaced = true;
export const state = {
  dialog: false
};
export const mutations = {
  PUSH(state, progress) {
    Vue.set(state, "dialog", progress);
  },
  REMOVE(state) {
    state.dialog = null;
  }
};

export const getters = {
  dialog: state => state.dialog
};

export const actions = {
  add({ commit }, progress) {
    commit("PUSH", progress);
  },
  remove({ commit }) {
    commit("REMOVE");
  }
};
