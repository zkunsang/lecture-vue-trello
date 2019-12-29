<template>
    <div>
        Board
        {{bid}}
        <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
        <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        <hr />

        <router-view></router-view>
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