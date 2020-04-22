<template>
  <div class="home">
    <div class="category">
      <ul>
        <li id="smartphone">Smart Phone</li>
        <li id="tablet">Tablet</li>
        <li id="laptop">Laptop</li>
        <li id="all">All</li>
      </ul>
    </div>
    <!-- {{products}} -->
    <div id="product">
      <ProductCard v-for="item in products" :key="item.id" :product="item"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"

export default {
  name: "Home",
  components: {
    ProductCard
  },
  created(){
    this.$store.dispatch('getProducts')
  },
  computed:{
    products(){
      return this.$store.state.products
    },
  },
  methods:{
    
  }
};
</script>

<style scoped>
  ul{
    margin: 0;
    padding:0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }
  li{
    width:120px;
    margin:5px 10px;
    border-radius: 3px;
    background: rgb(167, 167, 167);
    padding-top:3px;
    padding-bottom: 3px;
  }
  li:hover{
    background:grey;
    color:white;
    cursor: pointer;
  }
  #product{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:auto;
    text-align: center;
    width:70%;
  }
  .home{
    margin:auto;
    text-align: center;
  }
</style>