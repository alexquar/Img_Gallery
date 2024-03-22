<template>
  <div class="App">
    <HeaderTitle />
    <router-view />
  </div>
</template>

<script>
import HeaderTitle from './components/HeaderTitle.vue'

export default {
  name: 'App',
  components: {
    
    HeaderTitle,
  },
  }
</script>