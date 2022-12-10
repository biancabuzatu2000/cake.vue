<template>
    <div class="cookie1-page main-grid">
        <div v-for="(cookie1,index) in cookie1" :key="index">
            <div>{{cookie1.title}}</div>
            <div>{{cookie1.name}}</div>
            <img :src="cookie1.image" width="450" height="450" alt=""/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        created() {
            this.$store.dispatch('get_data_cookie1')
        },
        computed: {
            cookie1() {
                return this.$store.state.cookie1

            }
        }
    }
</script>

<style lang="scss">
    .cookie1-page{
        display: grid;
        grid-template-columns: 1fr 1fr
    }
</style>