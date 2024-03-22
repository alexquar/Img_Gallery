<template>
  <div>image grid goes here</div>
    
  </template>
  
  <script>
  import useCollection from '../composables/useCollection'
  export default {
  setup(){
    const {documents, error} = useCollection('images')



    return {documents, error}
  }
  }
  </script>
  
  <style>
  
  </style>