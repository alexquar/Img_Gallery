<template>
    <div v-if="documents" class="App">
      <h1 class="title">Search Users</h1>
      <div class="container">
    <form @submit="handleSubmit">
      <div>
      <v-select :options="documents.map(obj => obj.displayName)" placeholder="Search..." v-model="user" label="country"></v-select>
      <button class="btn">View User</button>
    </div>
    <div class="error">{{ error }}</div>
    </form>
  </div>
  <p class="body">This page offers a search of all users who have created an account with U Img. The search is performed by user display name and displayed alphabetically.
  </p>
    </div>
  </template>
  
  <script>
  import useCollection from '@/composables/useCollection';
  import useCollectionQuery from '@/composables/useCollectionQuery';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
  export default {
    components: {
    
    },
    setup() {
      const user  = ref('')
      const {documents, error} = useCollection('users')
      const router = useRouter()
      const handleSubmit =  (e) => {
        e.preventDefault()
        if(user.value){
        const {documents, error:err} =  useCollectionQuery('users', ['displayName','==',user.value], ['createdAt', 'asc'])
        setTimeout(()=>{
          const person = documents.value[0]
          console.log(person)
       router.push({ name: 'UserPage', params: { id: person.id } })
        }, 100)
        }
      }
      return {
        error,
        documents,
        handleSubmit,
        user,
       }
    }
  }
  </script>
  <style scoped>
  @import "vue-select/dist/vue-select.css";

  .App{
    padding-left:20px;
    padding-right: 20px;
    height:400px
  }
  form{
    width: 500px;
    border-radius:15px;
      }
  /* .App{
  --vs-controls-color: #664cc3;
  --vs-border-color: #664cc3;

  --vs-dropdown-bg: #282c34;
  --vs-dropdown-color: #cc99cd;
  --vs-dropdown-option-color: #cc99cd;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #eeeeee;
} */
.body{
  width:60%;
  text-align: center;
  margin:auto;
  margin-top:50px;
}
</style>