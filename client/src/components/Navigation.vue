<template>
  <div class="header">
    <nav>
      <div class="brand">
        <router-link style="color:rgb(233, 233, 233)" to="/">Hacktiv8-Store</router-link>
      </div>
      <div class="user">
        <div v-if="!logged">
          <div id="login" @click="loginSection">login</div>
        </div>
        <div v-else>
          <div id="logout" @click="logout">
            <button class="btn btn-info">Logout</button>
          </div>
        </div>
        <div id="cart">
          <router-link style="color:rgb(233, 233, 233)" to="/cart">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </div>
      </div>
    </nav>
    <div v-if="register">
      <LoginForm v-if="isLogin" @emitLog="changeLog" @emitReg="registerSection"></LoginForm>
    </div>
    <div v-else>
      <RegisterForm v-if="isLogin" @emitLog="changeLog" @emitReg="registerSection"></RegisterForm>
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default {
  name: "Navigation",
  data() {
    return {
      isLogin: false,
      logged: localStorage.getItem("access_token") ? true : false,
      register: true
    };
  },
  components: {
    LoginForm,
    RegisterForm
  },
  methods: {
    loginSection() {
      if (this.isLogin) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    },
    registerSection() {
      if (!this.register) {
        this.register = true;
      } else {
        this.register = false;
      }
    },
    changeLog() {
      this.isLogin = false;
      this.logged = true;
    },
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      this.logged = false;
      this.registerSection()
      this.$router.push({ path: "/" });
      this.$store.state.carts = [];
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Successfully logged out`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
};
</script>

<style scoped>
.header {
  background: #222222;
  margin: 0;
  padding: 0;
  text-align: center;
  margin: auto;
}
nav {
  display: flex;
  justify-content: space-between;
  color: rgb(233, 233, 233);
  width: 80%;
  align-items: center;
  margin: auto;
  padding: 10px 0;
}
.user {
  display: flex;
}
#login,
#logout {
  padding-right: 20px;
}
#login:hover {
  cursor: pointer;
  color: white;
}
.products {
  background: rgb(53, 53, 53);
}
.brand {
  font-weight: 900;
}
i:hover {
  color: white;
  cursor: pointer;
}
button {
  padding: 0 5px;
  border-radius: 0;
}
</style>