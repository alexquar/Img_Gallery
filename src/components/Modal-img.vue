<template>
  <div class="backdrop" @click="handleClick">
    <transition name="image" appear>
      <div>
        <img :src="imgUrl" />
        <div class=" caption">
      <h3>Posted by: {{ user }}</h3>
      <h3>Caption: {{caption}}</h3>
      <h3 v-if="date">Posted: {{ formatDistanceToNow(date.toDate())}}</h3>
    </div>
    <div v-if="person.uid == id" class="container">
    <button class="btn">Delete Post</button>
  </div>
    </div>
    </transition>
  </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'
import getUser from '@/composables/getUser'
export default {
  props: ['imgUrl','user','id', "caption", 'date'],
  setup(props, context) {
    const {user:person} = getUser()
    const handleClick = () => {
      context.emit('close', null)
    }
    return { handleClick, formatDistanceToNow, person }
  }
}
</script>

<style scoped>
  .backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .backdrop img{
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    margin-bottom: 0px;
    margin-top:30px;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    position: relative;
  }

  /* modal transitions */
  .image-enter-from {
    bottom: -200%;
  }
  .image-enter-to {
    bottom: 0;
  }
  .image-enter-active{
    transition: all ease-in-out 0.5s;
  }
  .caption{
    max-width: 60%;
    max-height: 80%;
    color:#786d9a;
    margin:auto;
    background: #f5f5f8;
    margin-top: 10px;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    display: flex;
      justify-content: space-between;
      align-items:center;
      margin-bottom: 10px;
    p, h3{
      margin-left: 10px;
      margin-right:10px;
    }
  }
  button{
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
  }
</style>