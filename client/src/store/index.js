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
      state.carts = [...state.carts, payload]
      // console.log(state.carts)
    },
    DeleteCart(state, payload) {
      state.carts = state.carts.filter(item => item.id != payload)
    },
    EditCart(state, payload) {
      let index
      for (let i = 0; i < state.carts.length; i++) {
        if (state.carts[i].id == payload.id) {
          index = i
        }
      }
      state.carts.splice(index, 1, payload)
    },
    CheckOut(state) {
      state.carts = []
    },
    SmartPhone(state, payload) {
      state.products = payload
    },
    Tablet(state, payload) {
      state.products = payload
    },
    Laptop(state, payload) {
      state.products = payload
    },
    All(state, payload) {
      state.products = payload
    }
  },
  actions: {
    getProducts({ commit }) {
      axios({
        method: 'get',
        url: 'https://nameless-journey-65036.herokuapp.com',
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
        url: 'https://nameless-journey-65036.herokuapp.com/cart',
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
        url: 'https://nameless-journey-65036.herokuapp.com/cart/add',
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
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Item has been added to cart`,
            showConfirmButton: false,
            timer: 1500
          });
          Router.push({ path: '/cart' })
        })
        .catch(err => {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
    },
    deleteCart({ commit }, payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios({
            method: 'delete',
            url: `https://nameless-journey-65036.herokuapp.com/cart/delete/${payload}`,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
            .then(response => {
              commit('DeleteCart', payload)
            })
            .catch(err => {
              console.log(err)
            })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    },
    editCart({ commit }, payload) {
      axios({
        method: 'put',
        url: `https://nameless-journey-65036.herokuapp.com/cart/edit/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: payload.amount
        }
      })
        .then(response => {
          // console.log(response.data)
          commit('EditCart', response.data)
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully edited`,
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err => {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
    },
    checkOut({ commit }, payload) {
      axios({
        method: 'post',
        url: `https://nameless-journey-65036.herokuapp.com/cart/checkout`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          commit('CheckOut')
          Router.push({ path: '/' })
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully checked out`,
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
    }
  },
  modules: {
  },
});
