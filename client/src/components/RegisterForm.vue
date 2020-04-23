<template>
  <div id="register" style="padding:0">
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Enter email" />
      <input v-model="password" type="password" placeholder="Enter password">
      <button>Register</button>
    </form>
    <p id="login" @click="$emit('emitReg')">Login</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name:"RegisterForm",
    data(){
      return{
        email: '',
        password:''
      }
    },
    methods:{
      register(){
        axios({
          method:'post',
          url:'https://nameless-journey-65036.herokuapp.com/register',
          data:{
            email: this.email,
            password: this.password
          }
        })
        .then(response=>{
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('email', response.data.email)
          this.$emit('emitLog');
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Wellcome ${localStorage.getItem('email')}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err=>{
          Swal.fire({
            position: "center",
            icon: "warning",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
      }
    }
  };
</script>

<style scoped>
  #register{
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
  #login{
    color: rgb(231, 231, 231);
    padding-bottom: 5px;
    margin:0;
  }
  #login:hover{
    color:white;
    cursor: pointer;
    
  }
</style>