<template>
  <div class="cart">
    <p>cart</p>
    <ReviewCard></ReviewCard>
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
};
</script>
