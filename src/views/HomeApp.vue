<template>
    <div class="App">
      <UploadForm />
      <ImageGrid @selected="updateSelectedImgUrl"  :documents="documents"/>
      <Modal
        v-if="selectedImgUrl" 
        :imgUrl="selectedImgUrl" 
        :user="selectedUser"
        :id="selectedId"
        :caption="selectedCaption"
        :date = "selectedDate"
        :docId="selectedDocId"
        @close="updateSelectedImgUrl" 
      />
    </div>
  </template>
  
  <script>
  import ImageGrid from '../components/ImageGrid.vue'
  import UploadForm from '../components/UploadForm.vue'
  import Modal from '../components/Modal-img.vue'
  import { ref } from 'vue'
  import useCollection from '@/composables/useCollection'
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
      const selectedDate = ref(null)
      const selectedCaption=ref(null)
      const selectedDocId = ref(null)
      const {documents, error } = useCollection('images')
      const updateSelectedImgUrl = (url, id, user, caption, date, docid) => {
        selectedImgUrl.value = url
        selectedUser.value = user
        selectedId.value=id
        selectedDate.value = date
        selectedCaption.value=caption
        selectedDocId.value=docid
      }
  
      return { selectedImgUrl, updateSelectedImgUrl, selectedId, selectedUser, selectedCaption, selectedDate, documents, error, selectedDocId  }
    }
  }
  </script>
  <style scoped>
  .App{
    padding-left:20px;
    padding-right: 20px;
  }
</style>