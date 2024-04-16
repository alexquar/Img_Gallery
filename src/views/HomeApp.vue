<template>
    <div class="App">
      <UploadForm />
      <ImageGrid @selected="updateSelectedImgUrl" />
      <Modal
        v-if="selectedImgUrl" 
        :imgUrl="selectedImgUrl" 
        :user="user"
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
      const user = ref(null)
      const id = ref(null)
      const updateSelectedImgUrl = (url, id, user) => {
        selectedImgUrl.value = url
        user.value = user
      }
  
      return { selectedImgUrl, updateSelectedImgUrl, id, user }
    }
  }
  </script>