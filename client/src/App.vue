<template>
  <div id="app">
    <router-view/>
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart</router-link>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0;
  padding:0;
}

</style>
