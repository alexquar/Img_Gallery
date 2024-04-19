<template>
    <div  class="App">
      <div v-if="userdoc && userdoc[0]">
      <h1 class="title">{{ userdoc[0].displayName }}'s Pictures</h1>
      <div class="container">
    <h3> Joined: {{ formatDistanceToNow(userdoc[0].createdAt.toDate()) }}</h3>
      <h3 v-if="documents">Number of Posts: {{ documents.length }}</h3>
    </div>
      <ImageGrid @selected="updateSelectedImgUrl"  :documents="documents"/>
      <Modal
        v-if="selectedImgUrl" 
        :imgUrl="selectedImgUrl" 
        :user="selectedUser"
        :id="selectedId"
        :caption="selectedCaption"
        :date = "selectedDate"
        :docId="selectedDocId"
        :path = 'selectedPath'
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
import { formatDistanceToNow } from 'date-fns'
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
        const {documents:userdoc, error:err} =  useCollectionQuery('users', ['uid','==',props.id], ['createdAt', 'asc'])
        const imageErr = ref(null)
        const {documents, error} = useCollectionQuery('images', ['uid','==',props.id], ['createdAt', 'asc'])
    const selectedImgUrl = ref(null)
      const selectedUser = ref(null)
      const selectedId = ref(null)
      const selectedCaption=ref(null)
      const selectedDate = ref(null)
      const selectedDocId= ref(null)
      const selectedPath = ref(null)
      const updateSelectedImgUrl = (url, id, user, caption, date, docid, path) => {
        selectedImgUrl.value = url
        selectedUser.value = user
        selectedId.value=id
        selectedCaption.value=caption
        selectedDate.value = date
        selectedDocId.value = docid
        selectedPath.value = path
      }
    
    
      return { selectedImgUrl, selectedDocId, updateSelectedImgUrl, selectedId, selectedUser, selectedCaption, documents, error, imageErr, userdoc, selectedDate, formatDistanceToNow, selectedPath }
    }
}
</script>

<style scoped>
  .App{
    padding-left:20px;
    padding-right: 20px;
  }
  h3{
    color:#786d9a;
    margin:30px 30px;
  }
</style>