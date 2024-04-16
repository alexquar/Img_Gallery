<template>
    <div class="App">
      <h1 class="title">Search Users</h1>
      <div class="container">
    <form>
      <v-select :options="countries" placeholder="Search..." label="country"></v-select>
    </form>
  </div>
  <p class="body">This page offers a search of all users who have created an account with U Img. The search is performed by user display name and displayed alphabetically.
  </p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    components: {
    
    },
    setup() {
  
      return {
        countries: [
      { country: "Spain" },
      { country: "France" },
      { country: "Ghana" },
      { country: "Nigeria" },
      { country: "Brazil" },
      { country: "Ecuador" },
    ],
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