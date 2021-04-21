
export const namespace = true;

export const state = {
  cv: []
};

export const mutations = {
  SET_CV(state, cv) {
    state.cv = cv;
  }
};

export const actions = {
  setUserCv({ commit }, cv) {
    commit("SET_CV", cv);
  }
};
