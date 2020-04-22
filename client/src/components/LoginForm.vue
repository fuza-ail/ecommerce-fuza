<template>
  <div id="login" style="padding:0">
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Enter email" />
      <input v-model="password" type="password" placeholder="Enter password">
      <button>Login</button>
    </form>
    <p id="register" @click="$emit('emitReg')">Register</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name:"LoginForm",
    data(){
      return{
        email: '',
        password:''
      }
    },
    methods:{
      login(){
        axios({
          method:'post',
          url:'http://localhost:3000/login',
          data:{
            email: this.email,
            password: this.password
          }
        })
        .then(response=>{
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('email', response.data.email)
          this.$emit('emitLog')
          console.log(response.data)
        })
        .catch(err=>{
          console.log('masuk')
          console.log(err.response)
        })
      }
    }
  };
</script>

<style scoped>
  #login{
    background-color: rgb(71, 71, 71);
    text-align: center;
    margin:auto;
    width:100%;
  }
  label,input,button{
    margin: 10px 10px;
  }
  button{
    background: grey;
    color: white;
    border:none;
    padding:3px 20px;
  }
  button:hover{
    background:black
  }
  #register{
    color: rgb(231, 231, 231);
    padding-bottom: 5px;
    margin:0;
  }
  #register:hover{
    color:white;
    cursor: pointer;
    
  }
</style>