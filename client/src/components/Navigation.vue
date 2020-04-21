<template>
  <div class="header">
    <nav>
      <div class="brand">H8-Store</div>
      <div class="user">
        <div id="login">login</div>
        <div id="cart">cart</div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {

  };
</script>

<style scoped>
  .header{
    background: #222222;
    margin: 0;
    padding:0;
    text-align: center;
    margin:auto;
  }
  nav {
    display: flex;
    justify-content: space-between;
    color: rgb(233, 233, 233);
    width: 80%;
    align-items: center;
    margin:auto;
    padding:5px 0;
  }
  .user{
    display:flex;
  }
  #login{
    padding-right:10px;
  }
  .products{
    background:rgb(53, 53, 53);
  }
</style>