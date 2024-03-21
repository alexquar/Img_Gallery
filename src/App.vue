<template>
  <div class="App">
    <HeaderTitle />
    <UploadForm />
    <ImageGrid />

  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import UploadForm from './components/UploadForm.vue'
export default {
  name: 'App',
  components: {
    ImageGrid,
    HeaderTitle,
    UploadForm
  }
}
</script>