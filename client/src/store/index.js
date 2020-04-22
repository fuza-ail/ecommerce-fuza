import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Router from '@/router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    FillProducts(state, payload) {
      state.products = [...payload]
    },
    FillCarts(state, payload) {
      state.carts = [...payload]
    },
    AddCart(state, payload) {
      state.carts=[...state.carts,payload]
      // console.log(state.carts)
    },
    DeleteCart(state,payload){
      state.carts = state.carts.filter(item=>item.id != payload)
    },
    EditCart(state,payload){
      let index
      for(let i = 0; i<state.carts.length; i++){
        if(state.carts[i].id == payload.id){
          index = i
        }
      }
      state.carts.splice(index,1,payload)
    },
    CheckOut(state){
      state.carts = []
    },
    SmartPhone(state, payload){
      state.products = payload
    },
    Tablet(state, payload){
      state.products = payload
    },
    Laptop(state, payload){
      state.products = payload
    },
    All(state, payload){
      state.products = payload
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
          // console.log(data)
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
          commit('AddCart', response.data)
          // console.log(response.data)
          Router.push({path:'/cart'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart({commit},payload){
      axios({
        method: 'delete',
        url: `http://localhost:3000/cart/delete/${payload}`,
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response=>{
        commit('DeleteCart',payload)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    editCart({commit},payload){
      axios({
        method: 'put',
        url: `http://localhost:3000/cart/edit/${payload.id}`,
        headers:{
          access_token: localStorage.getItem('access_token')
        },
        data:{
          amount: payload.amount
        }
      })
      .then(response=>{
        // console.log(response.data)
        commit('EditCart',response.data)
      })
      .catch(err=>{
        console.log(err.response)
      })
    },
    checkOut({commit},payload){
      axios({
        method: 'post',
        url: `http://localhost:3000/cart/checkout`,
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response=>{
        commit('CheckOut')
        Router.push({path:'/'})
      })
      .catch(err=>{
        console.log(err.response)
      })
    }
  },
  modules: {
  },
});
