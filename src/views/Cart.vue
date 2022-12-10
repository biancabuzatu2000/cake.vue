<template>
    <div>
        <h2>Cart</h2>
        <div class="cart-page main-grid">
            <div v-for="cart in cart" :key="cart.id">
                {{cart.name}}
                <br>
                <img :src="cart.image" width="350" height="350" alt=""/>
                <br>
                {{cart.cost}}
                <br>
                <button v-on:click="removeItemfromCart(cart)">
                    Remove from cart
                </button>
            </div>
            <br>
            <div class="total-cost">
                <br><br><br><br><br><br><br>
                <h1>TOTAL: {{ total }}</h1>
                <br>
                <router-link :to=" '/order'">
                <button>Submit your order</button>
                </router-link>
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
            this.$store.dispatch('get_data_cup')
            this.$store.dispatch('get_data_coo')
        },
        computed: {
            cart() {
                return this.$store.state.cart
            },
            total() {
                return this.cart.reduce((total, cake) => total + +cake.quantity * +cake.cost, 0).toFixed(2)
            },
        },
        methods: {
            removeItemfromCart(cart) {
                this.$store.commit('REMOVE_ITEM_FROM_CART', cart)
            },
        }

    }
</script>
<style lang="scss">

    .cart-page {


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
