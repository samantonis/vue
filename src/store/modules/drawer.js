//initialstate
const state = {
  open: false
};

const getters = {
  drawerState: state => state.open
};

const mutations = {
  toggle: state => (state.open = !state.open)
};

const actions = {
  toggleDrawer({ commit }) {
    commit("toggle");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
