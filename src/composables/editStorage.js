import { projectStorage } from '../firebase/config'
import { ref } from "vue"


const useStorage = () => {
  const error = ref(null)
  const filePath = ref(null)


  const deleteImage = async (path) => {
    error.value=null
    const storageRef = projectStorage.ref(path)

    try {
    storageRef.delete()
    error.value=null
    } catch (err) {
      console.log(err.message)
      error.value = err
    }
  }


  return { filePath, error, deleteImage }
}

export default useStorage;