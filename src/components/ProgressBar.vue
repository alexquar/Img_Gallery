<template>
    <div class="progress-bar" :style="{ width: progress + '%'}"></div>
  </template>
  
  <script>
  import { watchEffect } from 'vue'
  import useStorage from '../composables/useStorage'
  
  export default {
    props: ['file'],
    //add the prop for caption here when you try to start the upload check for a caption and emit an error if there isnt one
    setup(props, context) {
      const { progress } = useStorage(props.file) 
  
      watchEffect(() => {
        if (progress.value >= 100) {
          setTimeout(() => context.emit('complete'), 1000)
        }
      })
  
      return { progress }
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
  </style>