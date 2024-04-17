import { ref, watchEffect } from 'vue'
import { projectFirestore } from "../firebase/config"

const useCollectionQuery = (collection, _query, _orderBy) => {
    const documents = ref(null)
    const error = ref(null)
  const query = _query
  const orderBy = _orderBy
  let collectionRef = projectFirestore.collection(collection)
      collectionRef= collectionRef.where(...query)
      collectionRef= collectionRef.orderBy(...orderBy)
  const unsub = collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      results.push({...doc.data(), id: doc.id})
    })
    if(results.length){
    documents.value = results
    console.log('got the docs')
    error.value = null
    } else {
        documents.value = null
        error.value = 'No Posts Available!'
    }
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'Could not fetch the data'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  })

  return { documents, error }
}

export default useCollectionQuery