<template>
  <div class="home">
    <div class="category">
      <ul>
        <li id="smartphone" @click="smartPhone">Smart Phone</li>
        <li id="tablet" @click="tablet">Tablet</li>
        <li id="laptop" @click='laptop'>Laptop</li>
        <li id="all" @click="all">All</li>
      </ul>
    </div>
    <!-- {{products}} -->
    <div id="product">
      <ProductCard v-for="item in products" :key="item.id" :product="item"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Home",
  data() {
    return {
      dataProduct:''
    };
  },
  components: {
    ProductCard
  },
  created() {
    this.$store.dispatch("getProducts");
    this.dataProduct = this.products
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    smartPhone() {
      if(this.dataProduct==''){
        this.dataProduct = this.products
      }
      let data = []
      this.dataProduct.forEach(el=>{
        if(el.category == 'smartphone'){
          data.push(el)
        }
      })
      this.$store.commit('SmartPhone',data)
    },
    tablet() {
      if(this.dataProduct==''){
        this.dataProduct = this.products
      }
      let data = []
      this.dataProduct.forEach(el=>{
        if(el.category == 'tablet'){
          data.push(el)
        }
      })
      this.$store.commit('Tablet',data)
    },
    laptop() {
      if(this.dataProduct==''){
        this.dataProduct = this.products
      }
      let data = []
      this.dataProduct.forEach(el=>{
        if(el.category == 'laptop'){
          data.push(el)
        }
      })
      this.$store.commit('Laptop',data)
    },
    all() {
      if(this.dataProduct==''){
        this.dataProduct = this.products
      }
      let data = []
      this.dataProduct.forEach(el=>{
          data.push(el)
      })
      this.$store.commit('All',data)
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
}
li {
  width: 120px;
  margin: 5px 10px;
  border-radius: 3px;
  background: rgb(167, 167, 167);
  padding-top: 3px;
  padding-bottom: 3px;
}
li:hover {
  background: grey;
  color: white;
  cursor: pointer;
}
#product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  text-align: center;
  width: 70%;
}
.home {
  margin: auto;
  text-align: center;
}
</style>