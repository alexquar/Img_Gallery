<template>
    <div class="App">
      <div class="container">
    <form>
      <v-select :options="countries" placeholder="Search..." label="country"></v-select>
    </form>
  </div>
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
  .App{
    padding-left:20px;
    padding-right: 20px;
  }
  form{
    width: 200px;
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
</style>