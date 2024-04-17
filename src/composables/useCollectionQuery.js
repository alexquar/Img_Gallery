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
    console.log(results)
    documents.value = results
    console.log('got the docs')
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  })

  return { documents, error }
}

export default useCollectionQuery