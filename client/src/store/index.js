import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products:[],

  },
  mutations: {  
    FillProducts(state,payload){
      state.products = payload
    }
  },
  actions: {
    getProducts({commit}){
      axios({
        method: 'get' ,
        url:'http://localhost:3000',
      })
      .then(response=>{
        commit('FillProducts',response.data)
      })
      .catch(err=>{
        console.log(err.response)
      })
    }
  },
  modules: {
  },
});
