export const namespace = true;
export const state = {
  bio: []
};

export const mutations = {
  SET_BIO(state, bio) {
    state.bio = bio;
  }
};

export const actions = {
  setBioAction({ commit }, bio) {
    commit("SET_BIO", bio);
  }
};
