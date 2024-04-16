<template>
  <div>
    <h1 class="title">Create a Post</h1>
    <form class="container caption-form">
      <!--v-model take in input here then pass down as a prop-->
          <label>
            <span>Image Caption:</span>
          </label>
          <input type="text">
        </form>
  <div class="img-form">
    <form>
      <label>
        <input type="file" @change="handleChange">
        <span>Upload Image</span>
      </label>
      <div class="output">
        <div v-if="fileError" class="error">{{ fileError }}</div>
        <div v-if="file">{{ file.name }}</div>
        <ProgressBar v-if="file" :file="file" @complete="file = null" />
      </div>
    </form>
  </div>
</div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import ProgressBar from './ProgressBar'
  
  export default {
    components: { ProgressBar },
    setup() {
      const file = ref(null)
      const fileError = ref(null)
  
       // allowed file types
      const types = ['image/png', 'image/jpeg']
  
      const handleChange = (e) => {
        let selected = e.target.files[0]
        console.log(selected)
  
        if (selected && types.includes(selected.type)) {
          file.value = selected
          fileError.value = null
        } else {
          file.value = null
          fileError.value = 'Please select an image file (png or jpg)'
        }
      }
  
      return { file, fileError, handleChange }
    }
  }
  </script>
  
  <style>
    .img-form form{
      margin: 20px auto 10px;
      text-align: center;
    }
    .img-form  label input{
      height: 0;
      width: 0;
      opacity: 0;
    }
    .img-form  label{
      display: block;
      width: 150px;
      height: 30px;
      border: 1px solid var(--primary);
      border-radius: 6px;
      margin: 10px auto;
      line-height: 30px;
      color: var(--primary);
      font-weight: bold;
      cursor: pointer;
    }
    .img-form  label:hover{
      background: var(--primary);
      color: white;
    }
    .output{
      height: 40px;
      font-size: 0.8rem;
    }
    .error{
      color: var(--error);
    }
    .caption-form{
    label{
      display: block;
      width: 150px;
      height: 30px;
     
      border-radius: 6px;
      margin: 10px;
      line-height: 30px;
      color: var(--primary);
      font-weight: bold;
      text-align: center;
      }
    input{
      border-radius: 15px;
      border: 1px solid var(--primary);
      padding:10px;
      color : #786d9a;
    }
    input:focus {
      outline-color: #786d9a;
    }
      }
    .title{
      text-align: center;
      color:#786d9a;
    }
    .container{
      display: flex;
      justify-content: center;
      align-items:center;
    }
  </style>