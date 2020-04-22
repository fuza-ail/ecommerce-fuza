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
      <div>
        <i @click="deleteCart" id="del" class="fas fa-trash-alt" style="color:rgba(255, 0, 0, 0.4)"></i>
      </div>
      <div v-if="editStatus">
        <i id="edit" class="fas fa-edit" style="color:rgba(0, 0, 255, 0.4)" @click="changeEdit"></i>
      </div>
      <div v-else>
        <form @submit.prevent="editCart">
          <label for="amount">Amount</label>
          <input v-model="amount" style="width:50px" type="number" />
          <br />
          <button class="btn btn-primary">update</button>
        </form>
        <button class="btn btn-info" @click="cancelEdit">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReveiewCard",
  props: ["cart"],
  data() {
    return {
      editStatus: true,
      amount: this.cart.amount
    };
  },
  methods: {
    formatPrice(num) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(Number(num));
    },
    deleteCart() {
      this.$store.dispatch("deleteCart", this.cart.id);
    },
    changeEdit() {
      this.editStatus = false;
    },
    cancelEdit() {
      this.editStatus = true;
    },
    editCart() {
      this.editStatus = true;
      this.$store.dispatch("editCart", {
        id: this.cart.id,
        amount: this.amount
      });
    }
  },
  computed: {
    price() {
      return this.formatPrice(this.cart.amount * this.cart.Product.price);
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
  padding: 0;
  width: 100px;
  margin: 3px 0;
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