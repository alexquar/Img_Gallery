import { ref, watchEffect } from 'vue'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config.js'
import getUser from './getUser.js'
const useStorage = (file, caption) => {
  const error = ref(null)
  const url = ref(null)
  const progress = ref(null)
  const  {user}=getUser()
  watchEffect(() => {
    // references
    const storageRef = projectStorage.ref('images/' + file.name)
    const collectionRef = projectFirestore.collection('images')
    // upload the file
    storageRef.put(file).on('state_changed', (snap) => {
      // update the progress as file uploads
      let percentage = (snap.bytesTransferred/snap.totalBytes)*100
      progress.value = percentage 
    }, 
    (err) => {
      error.value = err
    }, 
    async () => {
      // get the dl url & make firestore doc
      const dlUrl = await storageRef.getDownloadURL()
      const path = storageRef.fullPath
      const createdAt = timestamp()
      console.log(path)
      await collectionRef.add({url: dlUrl, createdAt, uid:user.value.uid, displayName:user.value.displayName, caption, path})
      url.value = dlUrl
    })
  })

  return { progress, url, error }
}

export default useStorage