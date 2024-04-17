<template>
    <div class="App">
      <ImageGrid @selected="updateSelectedImgUrl"  :documents="documents"/>
      <Modal
        v-if="selectedImgUrl" 
        :imgUrl="selectedImgUrl" 
        :user="selectedUser"
        :id="selectedId"
        :caption="selectedCaption"
        @close="updateSelectedImgUrl" 
      />
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="imageErr" class="error">{{ imageErr }}</div>
    </div>
</template>

<script>
import ImageGrid from '../components/ImageGrid.vue'
import Modal from '../components/Modal-img.vue'
import useCollectionQuery from "../composables/useCollectionQuery"
import { ref } from 'vue'
export default {
    components: {
      ImageGrid,
      Modal
    },
    props: ['id'],
    setup (props) {
        const imageErr = ref(null)
        const {documents, error} = useCollectionQuery('images', ['uid','==',props.id], ['createdAt', 'asc'])
    const selectedImgUrl = ref(null)
      const selectedUser = ref(null)
      const selectedId = ref(null)
      const selectedCaption=ref(null)
      const updateSelectedImgUrl = (url, id, user, caption) => {
        selectedImgUrl.value = url
        selectedUser.value = user
        selectedId.value=id
        selectedCaption.value=caption
      }
  
      return { selectedImgUrl, updateSelectedImgUrl, selectedId, selectedUser, selectedCaption, documents, error, imageErr  }
    }
}
</script>

<style scoped>
  .App{
    padding-left:20px;
    padding-right: 20px;
  }
</style>