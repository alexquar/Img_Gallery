import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'



const useDocument = (collection, id) => {
const error = ref(null)
const isPending=ref(null)
let docRef = projectFirestore.collection(collection).doc(id)
const deleteDoc = async ()=>{
    isPending.value = true
    error.value = null
    try{
    const res = await docRef.delete()
    return res
    } catch (err){
        console.log(err.message)
        isPending.value = false
        error.value = "could not delete playlist"
    }
}

const updateDoc = async (updates)=>{
    isPending.value = true
    error.value = null
    try{
    const res = await docRef.update(updates)
    return res
    } catch (err){
        console.log(err.message)
        isPending.value = false
        error.value = "could not edit playlist"
    }
}

return {error, isPending, deleteDoc, updateDoc}
}


export default useDocument