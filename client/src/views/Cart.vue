<template>
  <div class="cart">
    <Navigation></Navigation>
    <p>cart</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '../components/Navigation'

export default {
  name: 'Cart',
  components: {
    Navigation
  },
};
</script>
