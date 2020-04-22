import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter:(to,from,next)=>{
      if(localStorage.getItem('access_token')){
        next()
      }else{
        next({path:'/'})
      }
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
