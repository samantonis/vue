import axios from "axios";
import router from "../../router";

//initialstate
const state = {
  firstName: "sam",
  name: "antonis",
  birthDate: "16/11/1990",
  email: "samantonisdev@gmail.com",
  accessToken: null,
  loggingIn: false,
  loginError: null
};

const getters = {
  fullName: state => `${state.firstName} ${state.name}`
};

const mutations = {
  loginStart: state => (state.loggingIn = true),
  loginStop: (state, errorMessage) => {
    state.loggingIn = false;
    state.loginError = errorMessage;
  },
  updateAccessToken: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  logout: state => {
    state.accessToken = null;
  }
};

const actions = {
  doLogin({ commit }, loginData) {
    commit("loginStart");

    axios
      .post("https://reqres.in/api/login", {
        ...loginData
      })
      .then(response => {
        localStorage.setItem("accessToken", response.data.token);
        commit("loginStop", null);
        commit("updateAccessToken", response.data.token);
        router.push("/users");
      })
      .catch(error => {
        commit("loginStop", error.response.data.error);
        commit("updateAccessToken", null);
      });
  },
  fetchAccessToken({ commit }) {
    commit("updateAccessToken", localStorage.getItem("accessToken"));
  },
  logout({ commit }) {
    localStorage.removeItem("accessToken");
    commit("logout");
    router.push("/login");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
