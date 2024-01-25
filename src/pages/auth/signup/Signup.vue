<template>
  <form >
    <div class=" h-[50px] bg-gray-500">
      <input placeholder="Email address "  type="email" class=" h-[50px] w-full border-b-2 px-2" id="email" name="email"    v-model="login.email"/>

    </div>
    <div class=" h-[50px] bg-gray-500 mt-3">
      <input type="password" placeholder="Password" class=" h-[50px] w-full border-b-2  px-2 " name="confirm_password"  v-model="login.password"/>

    </div>
    <div class=" m-auto  w-[100px]">
      <button  @click="loginIt()"  type="button"   class=" bg-blue-500 py-3 px-3 mt-5  text-white rounded-lg">Login Now </button>

    </div>


  
  </form>
</template>

<script>
import axios from 'axios';
    export default {
      name: 'login',
      data () {
        return {
         login:{
            email:'',
            password:''
          }
        }
      },
     methods: {
        loginIt(){
          axios.post("http://127.0.0.1:8000/api/auth/login" , this.login)
          .then(response => {
            console.log(response.data,"respone");
            let token=response.data;
            localStorage.setItem("token", token);              
            // this.$router.push('all-user');
        
          })

        }
        }
    }
  </script>
