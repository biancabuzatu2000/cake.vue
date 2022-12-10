<template>
    <div class="cupcake1-page main-grid">
        <div v-for="cupcake1 in cupcake1" :key="cupcake1">
            <div>{{cupcake1.title}}</div>
            <div>{{cupcake1.name}}</div>
            <img :src="cupcake1.image" width="450" height="450" alt=""/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        created() {
            this.$store.dispatch('get_data_cupcake1')
        },
        computed: {
            cupcake1() {
                return this.$store.state.cupcake1

            }
        }
    }
</script>

<style lang="scss">
    .cupcake1-page{
        display: grid;
        grid-template-columns: 1fr 1fr
    }
</style>