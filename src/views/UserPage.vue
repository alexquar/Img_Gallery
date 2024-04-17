<template>
    <div  class="App">
      <div v-if="document">
      <h1 class="title">{{ document.displayName }}'s Pictures</h1>
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
    <div v-else class="title">
      <h1>No User Available</h1>
    </div>
  </div>
</template>

<script>
import ImageGrid from '../components/ImageGrid.vue'
import Modal from '../components/Modal-img.vue'
import useCollectionQuery from "../composables/useCollectionQuery"
import { ref } from 'vue'
import getDocument from '@/composables/getDocument'
export default {
    components: {
      ImageGrid,
      Modal
    },
    props: ['id'],
    setup (props) {
        const {error:err, document} = getDocument('users', props.id)
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
      console.log(document.value)
      return { selectedImgUrl, updateSelectedImgUrl, selectedId, selectedUser, selectedCaption, documents, error, imageErr, document }
    }
}
</script>

<style scoped>
  .App{
    padding-left:20px;
    padding-right: 20px;
  }
</style>