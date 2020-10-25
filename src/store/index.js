import Vue from 'vue'
import Vuex from 'vuex'
import picturesData from './pictures-data'
import bordersData from './borders-data'
import colorsData from './colors-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    title: '',
    signature: '',
    date: '',
    font: '',
    titles: null,
  },
  getters: {
    cart: (state) => state.cart,
    title: (state) => state.title,
    signature: (state) => state.signature,
    date: (state) => state.date,
    font: (state) => state.font,
    titles: (state) => state.titles,
  },
  mutations: {
    submitTitles(state) {
      state.titles = {
        title: state.title,
        signature: state.signature,
        date: state.date,
        font: state.font,
        price: 0,
      }
      state.cart.splice(2, 1, state.titles)
    },
    addTitles(state, e) {
      state.font = e.path[0].innerHTML
      state.titles = {
        title: state.title,
        signature: state.signature,
        date: state.date,
        font: state.font,
      }
      state.cart.splice(2, 1, state.titles)
    },
  },
  actions: {},
  modules: {
    picturesData,
    bordersData,
    colorsData,
  },
})
