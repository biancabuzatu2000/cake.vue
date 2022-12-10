<template>
    <div class="cake1-page main-grid">
        <div v-for="cake1 in cake1" :key="cake1">
            <div>{{cake1.title}}</div>
            <div>{{cake1.name}}</div>
            <img :src="cake1.image" width="450" height="450" alt=""/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        created() {
            this.$store.dispatch('get_data_cake1')
        },
        computed: {
            cake1() {
                return this.$store.state.cake1

            }
        }
    }
</script>

<style lang="scss">
.cake1-page{
    display: grid;
    grid-template-columns: 1fr 1fr
}
</style>
