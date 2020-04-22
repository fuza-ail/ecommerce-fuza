<template>
  <div id="review">
    <img :src="cart.Product.image_url" style="width:120px; height:120px;" alt />
    <div>
      <p>Name: {{cart.Product.name}}</p>
      <p>Description: {{cart.Product.description}}</p>
      <p>Price: {{formatPrice(cart.Product.price)}}</p>
    </div>
    <div>
      <p for="amount">Amount: {{cart.amount}}</p>
      <p>Total Price: {{price}}</p>
      <i id="del" class="fas fa-trash-alt" style="color:rgba(255, 0, 0, 0.4)"></i>
      <i id="edit" class="fas fa-edit" style="color:rgba(0, 0, 255, 0.4)"></i>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "ReveiewCard",
  props: ["cart"],
  methods: {
    formatPrice(num) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(Number(num));
    }
  },
  computed: {
    price() {
      return this.formatPrice(this.cart.amount * this.cart.Product.price)
    }
  }
};
</script>

<style scoped>
#review {
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin: 10px auto;
}
p {
  margin: 0;
  padding: 0;
}
button {
  margin-left: 5px;
}
i {
  margin: 0 5px;
}
#del:hover {
  color: rgba(255, 0, 0, 1);
  cursor: pointer;
}
#edit:hover {
  color: rgba(0, 0, 255, 1);
  cursor: pointer;
}
</style>