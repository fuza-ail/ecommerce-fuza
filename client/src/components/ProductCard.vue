<template>
  <div id="card">
    <img
      :src="product.image_url"
      class="card-img-top"
      alt="product."
      style="width:150px;height:150px;"
    />
    <p>{{product.name}}</p>
    <p>{{product.description}}</p>
    <p>{{formatPrice(product.price)}}</p>
    <div v-if="addStatus">
      <button class="btn btn-dark" @click="form">Add to Cart</button>
    </div>
    <div v-else>
      <form @submit.prevent="addCart">
        <label for="amount">Amount</label><br>
        <input v-model="amount" type="number" id="amount" style="width:100px;text-align:center;"><br>
        <button style="width:100px" class="btn btn-dark">Add</button>
      </form>
      <button @click="hideForm" style="width:100px" class="btn btn-info">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data(){
    return{
      addStatus: true,
      amount: ''
    }
  },
  props: ["product"],
  methods: {
    formatPrice(num) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(Number(num));
    },
    form(){
      this.addStatus = false
    },
    hideForm(){
      this.addStatus = true
    },
    addCart(){
      let data={
        ProductId : this.product.id,
        amount: this.amount
      }
      this.$store.dispatch('addCart',data)
    }
  }
};
</script>

<style scoped>
#card {
  padding: 10px 20px;
  margin: 20px;
  background: rgb(245, 245, 245);
  box-shadow: 3px 3px #dadada96;
}
p {
  font-size: 0.8em;
  margin: 0;
}
#card:hover {
  transform: scale(1.03);
}
button{
  padding:3px 8px;
  border-radius: 0 !important;
  margin-top:5px;
}
</style>