<template>
  <div class="cart">
    <ReviewCard v-for="item in carts" :key="item.id" :cart="item"></ReviewCard>
    <button class="btn btn-dark">Checkout</button>
    {{carts}}
  </div>
</template>

<script>
// @ is an alias to /src
import ReviewCard from '../components/ReviewCard'

export default {
  name: 'Cart',
  components: {
    ReviewCard
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
