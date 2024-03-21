<template>
  <div class="App">
    <HeaderTitle />
    <ImageGrid />
  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue'
import HeaderTitle from './components/HeaderTitle.vue'

export default {
  name: 'App',
  components: {
    ImageGrid,
    HeaderTitle
  }
}
</script>