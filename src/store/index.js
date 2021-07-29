import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cnpj: ''
  },
  mutations: {
    SET_CNPJ(state, newCnpj) {
      state.cnpj = newCnpj;
    },
  },
  actions: {
    ADD_CNPJ: ({ commit }, payload) => {
      commit("SET_CNPJ", payload);
      return "ok";
    },
  },
});
