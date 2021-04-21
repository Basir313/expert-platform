export const namespace = true;
export const state = {
  education: []
};

export const mutations = {
  SET_EDUCATION(state, education) {
    state.education = education;
  }
};

export const actions = {
  setEducation({ commit }, education) {
    commit("SET_EDUCATION", education);
  }
};
