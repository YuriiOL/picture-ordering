import Vue from 'vue'
import Vuex from 'vuex'
import picturesData from './pictures-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    cart: (state) => state.cart,
  },
  mutations: {},
  actions: {},
  modules: {
    picturesData,
  },
})
