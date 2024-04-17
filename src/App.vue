<template>
  <div class="App">
    <HeaderTitle />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import HeaderTitle from './components/HeaderTitle.vue'
import PageFooter from './components/PageFooter.vue'
export default {
  name: 'App',
  components: {
    PageFooter,
    HeaderTitle,
  },
  }
</script>