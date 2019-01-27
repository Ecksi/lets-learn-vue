import Vue from 'vue';
import Vuex from 'vuex';
import { getAllFoods } from './js/fetchCalls.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: []
  },
  mutations: {
    GET_ALL_FOODS: (state, payload) => state.foods = payload
  },
  actions: {
    getFoods: ({commit}) => getAllFoods()
      .then(({data}) => commit('GET_ALL_FOODS', data))
  },
  getters: {
    countLinks: state => state.foods.length
  }
})
