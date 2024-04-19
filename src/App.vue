<template>
  <div class="App">
    <HeaderTitle />
    <router-view />
    <div class="webfooter">
    <PageFooter />
  </div>
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
<style>
.web-footer{
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>