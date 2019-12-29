<template>
    <div>
        Board
        {{bid}}
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route.params.bid);
        this.bid = this.$route.params.bid
    },
    data() {
        return {
            bid: 0
        }
    }
}
</script>

<style>

</style>