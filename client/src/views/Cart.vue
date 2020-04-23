<template>
  <div class="cart">
    <ReviewCard v-for="(item,index) in carts" :key="index" :cart="item"></ReviewCard>
    <button class="btn btn-dark" @click="checkOut">Checkout</button>
    <button class="btn btn-info" @click="toHome">Home</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ReviewCard from '../components/ReviewCard.vue'

export default {
  name: 'Cart',
  components: {
    ReviewCard
  },
  methods:{
    toHome(){
      this.$router.push({path:'/'})
    },
    checkOut(){
      this.$store.dispatch('checkOut')
    }
  },
  computed:{
    carts(){
      return this.$store.state.carts
    }
  },
  created(){
    this.$store.dispatch('getCarts')
  }
};
</script>

<style scoped>
  button{
    margin: 20px 10px;
  }
</style>