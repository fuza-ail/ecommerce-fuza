<template>
  <div class="home">
    <Navigation></Navigation>
    <div class="category">
      <ul>
        <li>Smart Phone</li>
        <li>Tablet</li>
        <li>Laptop</li>
        <li>All</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "../components/Navigation";

export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>
