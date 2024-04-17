<template>
    <form @submit.prevent="handleSubmit" class="container-col">
      <h3>Sign up</h3>
      <div>
      <input type="text" required placeholder="Display name" v-model="displayName">
    </div>
    <div>
      <input type="email" required placeholder="Email" v-model="email">
    </div>
    <div>
      <input type="password" required placeholder="Password" v-model="password">
    </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div>
      <button class="btn" v-if="!isPending">Sign up</button>
      <button class="btn" v-if="isPending" disabled>Loading</button>
    </div>
    </form>
  </template>
  
  <script>
  // using @ means start at the project src root
  import useSignup from '@/composables/useSignup'
  import { ref } from 'vue'
  import {useRouter} from 'vue-router'
  import addDocument from '@/composables/addDocument'
  export default {
    setup() {
      const { error, signup, isPending } = useSignup()
      const router = useRouter()
      const email = ref('')
      const {addDoc}=addDocument('users')
      const password = ref('')
      const displayName = ref('')
  
      const handleSubmit = async () => {
        const res = await signup(email.value, password.value, displayName.value)
        if (!error.value) {
          addDoc({email:email.value, displayName:displayName.value})
          router.push( { name : 'HomeApp'})
        }
      }
  
      return { email, password, displayName, handleSubmit, error, isPending }
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