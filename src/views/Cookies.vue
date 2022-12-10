<template>
    <div>
        <h4>Cookies</h4>
        <div class="cookies-page main-grid">
            <div v-for="(cookie,index) in cookies" :key="index">
                {{cookie.name}}
                <br>
                <img :src="cookie.image" width="350" height="350" alt=""/>
                <div>
                    {{cookie.cost}}
                </div>
                <router-link :to="'/cookie1'">
                    <button v-on:click="">See more</button>
                </router-link>
                <button v-on:click="addItemtoCart(cookie)">
                    Add to cart
                </button>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data: () => {
            return {};
        },
        created() {
            this.$store.dispatch('get_data_coo')
        },
        computed: {
            cookies() {
                return this.$store.state.cookies
            }
        },
        methods: {
            addItemtoCart(cookie) {
                    this.$store.commit('ADD_ITEM_TO_CART_COO', cookie)
            },
        }
    }
</script>
<style lang="scss">
    .cookies-page {
        @media only screen and (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            text-align: center;
        }
        @media only screen and (min-width: 0) {
            height: 100%;
            margin: 0;
            padding: 0;
        }
    }

    button {
        padding: 10px 20px;
        border-radius: 212px;
        margin-left: auto;
        color:white;
        margin-top: 20px;
        background-color:#664141;
        border: none;
    }
    h4 {
        color:#664141;
        font-size: 50px;
        text-align: center;
    }

</style>