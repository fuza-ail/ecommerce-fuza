import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    FillProducts(state, payload) {
      state.products = payload
    },
    FillCarts(state, payload) {
      state.carts = payload
    },
    AddCart(state, payload) {
      state.carts.push(payload)
    }
  },
  actions: {
    getProducts({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000',
      })
        .then(response => {
          commit('FillProducts', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getCarts({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          let data = response.data.Carts
          commit('FillCarts', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addCart({ commit }, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/cart/add',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: payload.amount,
          ProductId: payload.ProductId
        }
      })
        .then(response => {
          console.log(response.data)
          commit('AddCart', response.data)
          router.push({path:'/cart'})
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  },
});
