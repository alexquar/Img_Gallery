<template>
    <div class="App">
      <UploadForm />
      <ImageGrid @selected="updateSelectedImgUrl" />
      <Modal
        v-if="selectedImgUrl" 
        :imgUrl="selectedImgUrl" 
        @close="updateSelectedImgUrl" 
      />
    </div>
  </template>
  
  <script>
  import ImageGrid from '../components/ImageGrid.vue'
  import UploadForm from '../components/UploadForm.vue'
  import Modal from '../components/Modal-img.vue'
  import { ref } from 'vue'
  
  export default {
    components: {
      ImageGrid,
      UploadForm,
      Modal
    },
    setup() {
      const selectedImgUrl = ref(null)
  
      const updateSelectedImgUrl = (url) => {
        selectedImgUrl.value = url
        console.log(selectedImgUrl.value)
      }
  
      return { selectedImgUrl, updateSelectedImgUrl }
    }
  }
  </script>