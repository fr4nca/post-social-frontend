/* eslint-disable */

import axios from "../../services/api";
import setAuthToken from "../../utils/setAuthToken";
const state = {
  isAuthenticated: false,
  user: {}
};

const getters = {
  user: state => state.user,
  isAuthenticated: state => state.isAuthenticated
};

const actions = {
  async login({ commit }, user) {
    try {
      const loginRes = await axios.post("/login", user);
      const { token } = loginRes.data;

      localStorage.setItem("@PostSocial:token", token);
      setAuthToken(token);

      const currentUser = await axios.get("/user");
      commit("mutLogin", currentUser.data);
    } catch (e) {
      console.log(e.response.data.message);
    }
  },
  async setCurrentUser({ commit }) {
    const currentUser = await axios.get("/user");
    commit("mutLogin", currentUser.data);
  }
};

const mutations = {
  mutLogin: (state, user) => {
    state.user = user;
    state.isAuthenticated = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
