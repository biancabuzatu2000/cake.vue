<template>
    <div>
        <h2>Cakes</h2>
        <div class="cakes-page main-grid">
            <div v-for="cake in cakes" :key="cake.id">
                    {{cake.name}}
                <br>
                <img :src="cake.image" width="350" height="350" alt=""/>
                <br>
                {{cake.cost}}
                <br>
                <router-link :to="'/cake1'">
                    <button v-on:click="">See more</button>
                </router-link>
                <button v-on:click="addItemtoCart(cake)">
                    Add to cart
                </button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        created() {
            this.$store.dispatch('get_data')
        },
        computed: {
            cakes() {
                return this.$store.state.cakes

            }
        },
        methods: {
            addItemtoCart(cake) {
                this.$store.commit('ADD_ITEM_TO_CART', cake)
            },
        }
    }
</script>
<style lang="scss">

    .cakes-page {


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


    button {
        padding: 11px 20px;
        border-radius: 212px;
        margin-left: auto;
        color:white;
        margin-top: 20px;
        background-color: #664141;
        border: none;
    }
    button:disabled{
        opacity: 1;
    }


    h2 {
        color:#664141;
        font-size: 40px;
        text-align: center;
    }



</style>
