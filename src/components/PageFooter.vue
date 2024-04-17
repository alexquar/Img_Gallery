<template>
    <div class="container">
        <button class="btn-outline">
            <router-link :to="{ name: 'SignupApp' }"> About</router-link>
        </button>
        <button class="btn-outline">
            <router-link :to="{ name: 'SearchApp' }"> Search</router-link>
        </button>
        <button class="btn-outline">
            <router-link :to="{ name: 'HomeApp' }"> Home</router-link>
        </button>
    </div>
</template>

<script>

export default {
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>

</style>