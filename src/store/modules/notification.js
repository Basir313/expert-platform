export const namespaced = true;
export const state = {
  notification: []
};
let nextId = 1;
export const mutations = {
  PUSH(state, notification) {
    state.notification.push({
      ...notification,
      id: nextId++
    });
  },
  DELETE(state, notificationToRemove) {
    state.notification = state.notification.filter(
      notification => notification.id !== notificationToRemove.id
    );
  }
};

export const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  remove({ commit }, notificationToRemove) {
    commit("DELETE", notificationToRemove);
  }
};
