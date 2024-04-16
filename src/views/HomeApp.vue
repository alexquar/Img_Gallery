<template>
    <div class="App">
      <UploadForm />
      <ImageGrid @selected="updateSelectedImgUrl" />
      <Modal
        v-if="selectedImgUrl" 
        :imgUrl="selectedImgUrl" 
        :user="selectedUser"
        :id="selectedId"
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
      const selectedUser = ref(null)
      const selectedId = ref(null)
      const updateSelectedImgUrl = (url, id, user) => {
        selectedImgUrl.value = url
        selectedUser.value = user
        selectedId.value=id
      }
  
      return { selectedImgUrl, updateSelectedImgUrl, selectedId, selectedUser }
    }
  }
  </script>
  <style scoped>
  .App{
    padding-left:20px;
    padding-right: 20px;
  }
</style>