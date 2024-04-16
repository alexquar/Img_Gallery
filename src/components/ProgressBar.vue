<template>
  <div>
    <div id="caption-error" v-if="error" class="error">{{ error }}</div>
    <div v-else class="progress-bar" :style="{ width: progress + '%'}"></div>
  </div>
  </template>
  
  <script>
  import { watchEffect } from 'vue'
  import useStorage from '../composables/useStorage'
  import { ref } from 'vue'
  export default {
    props: ['file', 'caption'],
    //add the prop for caption here when you try to start the upload check for a caption and emit an error if there isnt one
    setup(props, context) {
      const error = ref(null)
      if(props.caption){ //here, we will also have to modify use store
        error.value=null
        const { progress } = useStorage(props.file) 
        watchEffect(() => {
        if (progress.value >= 100) {
          setTimeout(() => context.emit('complete'), 1000)
        }
      })
      return { progress, error }
      } else {
        error.value = "Please enter a caption before uploading an image!"
        return {error}
      }
  
      
    }
  }
  </script>
  
  <style>
    .progress-bar {
      display: block;
      height: 6px;
      background: var(--primary);
      transition: width 0.3s ease;
      border-radius: 6px;
      margin-top: 20px;
    }
    #caption-error{
      margin-top: 10px;
    }
  </style>