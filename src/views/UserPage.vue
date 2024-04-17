<template>
    <div>
        {{ id }}
    </div>
</template>

<script>
import useCollectionQuery from "../composables/useCollectionQuery"
export default {
    props: ['id'],
    setup (props) {
        const {documents, error} = useCollectionQuery('uid', ['user','==',props.id], ['createdAt', 'asc'])
        console.log(documents)
        return {documents,error}
    }
}
</script>

<style scoped>

</style>