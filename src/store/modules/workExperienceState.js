export const namespace = true;
export const state = {
  work: {}
};
export const mutations = {
  SET_WORK(state, work) {
    state.work = work;
  }
};
export const actions = {
  setWork({ commit }, work) {
    commit("SET_WORK", work);
  }
};
