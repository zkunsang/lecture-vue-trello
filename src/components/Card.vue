<template>
    <div>
        Card
        {{cid}}
    </div>
</template>

<script>
export default {
    created() {
        this.cid = this.$route.params.cid
        console.log(this.$route.params);
    },
    watch: {
        '$route'() {
            this.cid = this.$route.params.cid
        }
    },
    data() {
        return {
            cid: 0
        }
    }
}
</script>

<style>

</style>