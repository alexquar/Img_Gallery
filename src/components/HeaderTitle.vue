<template>
    <div class="title">
      <h1><router-link :to="{ name: 'HomeApp' }">img-u</router-link></h1>
      <p>Your easy to use image sharing platform!</p>
      <div>
      <div>
      <p> Hey </p>
      <button class="btn" @click="handleSubmit"> Logout </button>
    </div>
    <div>
      <button class="btn"> <router-link :to="{ name: 'LoginApp' }">Login</router-link></button>
      <button class="btn">  <router-link :to="{ name: 'SignupApp' }"> Signup</router-link> </button>
    </div>
    </div>
    </div>
  </template>

  <script>
  import {useRouter} from 'vue-router'
  import getUser from '../composables/getUser'
  import useLogout from '../composables/useLogout'
  export default {
    setup(){
      const router = useRouter()
      const { logout } = useLogout()
       const handleSubmit = async () => {
        await logout()
        router.push({name:'Login'})
        }
        const {user} = getUser()
        return { handleSubmit, user}
    }
  }
  </script>
  
  <style>
  .title a{
    text-decoration: none;
  }
    .title h1{
      color: var(--error);
      font-size: 2rem;
      letter-spacing: 2px;
      margin: 40px 0 20px 0;
      text-align: center;
    }
    .title p{
      text-align: center;
      color: #aaa;
    }
  </style>