<template>
  <transition-group tag="div" name="grid" appear class="img-grid">
    <div 
      v-for="img in documents" 
      :key="img.id" 
      class="img-wrap"
      @click="handleClick(img.url, img.uid, img.displayName, img.caption, img.createdAt, img.id, img.path)"
    >
      <img :src="img.url" />
    </div>
  </transition-group>
</template>

<script>
export default {
  props: ['documents'],
  setup(props, context) {

    const handleClick = (url, id, user, caption, date, docid) => {
      context.emit('selected', url, id, user, caption, date, docid)
    }

    return {handleClick }
  }
}
</script>

<style>
  .img-grid{
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    margin-bottom:100px;
  }
  .img-wrap{
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    /* padding controls height, will always be perfectly square regardless of width */
    position: relative;
    opacity: 0.8;
  }
  .img-wrap img{
    min-width: 100%;
    min-height: 100%;
    max-width: 180%;
    position: absolute;
    top: 0;
    left: 0;
  }

  /* transitions */
  .grid-enter-from {
    opacity: 0
  }
  .grid-enter-to {
    opacity: 1;
  }
  .grid-enter-active {
    transition: all 3s ease;
  }
  .grid-move {
    transition: all 0.5s ease;
  }
</style>