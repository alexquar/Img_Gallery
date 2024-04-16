<template>
    <form @submit.prevent="handleSubmit" class="container-col">
      <h3>Login</h3>
      <div>
      <input type="email" placeholder="Email" v-model="email">
    </div>
    <div>
      <input type="password" placeholder="Password" v-model="password">
    </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div>
      <button class= "btn" v-if="!isPending">Login</button>
      <button class= "btn" v-if="isPending" disabled>Loading</button>
    </div>
    </form>
  </template>
  
  <script>
  // using @ means start at the project src root
  import useLogin from '@/composables/useLogin'
  import { ref } from 'vue'
  import {useRouter} from 'vue-router'
  
  export default {
    setup() {
      const { error, login, isPending } = useLogin()
      const router = useRouter()
      const email = ref('')
      const password = ref('')
  
      const handleSubmit = async () => {
        const res = await login(email.value, password.value)
        if (!error.value) {
          router.push( { name : 'HomeApp'})
        }
      }
  
      return { email, password, handleSubmit, error, isPending }
    }
  }
  </script>

  <style scoped>
  form{
    margin-top: 40px;
  }
  form{
    input{
      border-radius: 15px;
      border:none;
      padding:10px;
      color : #786d9a;
    }
    input:focus {
  
  outline-color: #786d9a;
  }
  }
</style>