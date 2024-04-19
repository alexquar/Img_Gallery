<template>
    <div class="title">
      <h1><router-link :to="{ name: 'HomeApp' }">U Img</router-link></h1>
      <p>Your easy to use image sharing platform!</p>
      <div>
      <div v-if="user" class="container bottom">
      <p> Hey, {{ user.displayName }}!</p>
      <button class="btn" id="logout" @click="handleSubmit"> Logout </button>
      <button class="btn"  @click="handleMyPage"> My Page </button>
    </div>
    <div v-else class="container bottom">
      <button class="btn"> <router-link :to="{ name: 'LoginApp' }">Login</router-link></button>
      <button id="signup" class="btn">  <router-link :to="{ name: 'SignupApp' }"> Signup</router-link> </button>
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
      const {user} = getUser()
      console.log('user',user)
      const router = useRouter()
      const { logout } = useLogout()
       const handleSubmit = async () => {
        await logout()
        router.push({name:'LoginApp'})
        }
        
        const handleMyPage = () => {
          router.push({ name: 'UserPage', params: { id: user.value.uid } })
        }
        return { handleSubmit, user, handleMyPage}
    }
  }
  </script>
  
  <style scoped>
  .title{
    border-bottom:solid;
    border-color: var(--primary);
  }
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
    .container{
      display: flex;
      justify-content: center;
      align-items:center;
    }
    #logout{
      margin-left: 20px;
    }
    #signup{
      margin-left:20px;
    }
    .bottom{
      margin-bottom:40px
    }
    button{
      margin:0px 10px;
    }
  </style>