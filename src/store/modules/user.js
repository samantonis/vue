//initialstate
const state = {
  firstName: "sam",
  name: "antonis",
  birthDate: "16/11/1990",
  email: "samantonisdev@gmail.com"
};

const getters = {
  fullName: state => `${state.firstName} ${state.name}`
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
