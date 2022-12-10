<template>
    <div>
        <h3>Cupcakes</h3>
        <div class="cupcakes-page main-grid">
            <div v-for="cupcake in cupcakes" :key="cupcake.id">
                {{cupcake.name}}
                <br>
                <img :src="cupcake.image" width="350" height="350" alt=""/>
                <div>
                    {{cupcake.cost}}
                </div>
                <router-link :to="'/cupcake1'">
                    <button v-on:click="">See more</button>
                </router-link>
                <button v-on:click="addItemtoCart(cupcake)">
                    Add to cart
                </button>

            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data: () => {
            return {

            };
        },
        created() {
            this.$store.dispatch('get_data_cup')
        },
        computed: {
            cupcakes() {
                return this.$store.state.cupcakes
            }
        },
        methods: {
            addItemtoCart(cupcake) {
                this.$store.commit('ADD_ITEM_TO_CART_CUP', cupcake)
            },

        }
    }
</script>
<style lang="scss">

    .cupcakes-page {
        @media only screen and (min-width: 0) {
            height: 100%;
            margin: 0;
            padding: 0;
        }

        @media only screen and (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            text-align: center;
            header{
                height: 60px;
                background-color: #BDA2A2;
                box-shadow: 2px 2px 5px #BDA2A2;
                text-align: right;
                font-size: 30px;
                padding-top: 20px;

            }
        }

    }
    h3 {
        color:#664141;
        font-size: 40px;
        text-align: center;
    }
    button {
        padding: 11px 20px;
        border-radius: 212px;
        margin-left: auto;
        color: white;
        margin-top: 20px;
        background-color:#664141;
        border: none;
    }






</style>