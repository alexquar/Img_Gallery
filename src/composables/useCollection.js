import { ref, watchEffect } from "vue"
import { projectFirestore } from "@/firebase/config"
const useCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    const collectionRef = projectFirestore.collection(collection).orderBy('createdAt', "desc")
    const unsub = collectionRef.onSnapshot(()=> {
        let results = []
        snaps.docs.forEach(doc=> {
            results.push({...doc.data, id: doc.id})
        })
        documents.value = results
        error.value = null
    }, (err) =>{
        console.log(err.message)
        error.value = 'could not fetch data'
        documents.value = null
    })


watchEffect( (onInvalidate) => {
    onInvalidate(()=>unsub())
})

    return {documents, error}
}

export default useCollection