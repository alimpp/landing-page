const theme = {
  namespaced: true,
  state: {
    applicationMode: "light",
  },
  getters: {
    watchMode(state) {
      return state.applicationMode;
    },
  },
  mutations: {
    darkMode(state, value) {
      return (state.applicationMode = value);
    },
    lightMode(state, value) {
      return (state.applicationMode = value);
    },
  },
};

export default theme;
