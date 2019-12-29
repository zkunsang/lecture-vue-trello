<template>
    <div>
        Card
        <div v-if="loading">loading card... </div>
        <div v-else>{{cid}}</div>
        
    </div>
</template>

<script>
export default {
    created() {
        this.fetchData()
    },
    watch: {
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },
    data() {
        return {
            cid: 0,
            loading: false
        }
    },
    methods: {
        fetchData() {
            this.loading = true;
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 1000)
        }
    }
}
</script>

<style>

</style>