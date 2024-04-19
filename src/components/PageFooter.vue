<template>
    <div class="container footer">
     <div v-if="user">
        <button class="btn-outline">
            <router-link :to="{ name: 'AboutApp' }"> About</router-link>
        </button>
        <button class="btn-outline">
            <router-link :to="{ name: 'SearchApp' }"> Search</router-link>
        </button>
        <button class="btn-outline">
            <router-link :to="{ name: 'HomeApp' }"> Home</router-link>
        </button>
    </div>
    </div>
</template>

<script>
import getUser from "../composables/getUser"
export default {
    setup () {
        const {user} = getUser()

        return {user}
    }
}
</script>

<style  scoped>
.footer{
position: fixed;
  bottom: 0;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  margin-bottom:40px;
}
</style>