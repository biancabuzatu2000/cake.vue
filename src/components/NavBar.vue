<template>
    <header class="nav-bar" ref="navBar">
        <div class="img">
        <img src="https://cdn.shopify.com/s/files/1/0023/6797/9619/files/ccs-logo-small_250x250.png?v=1559085922" alt="logo" width="100px" height="90px"  >
    <HambMenuIcon :isOpen="isOpen" @action="handleHambIcon" />
        </div>

        <nav>
            <router-link v-for="item in nav" :to="item.to">
                <span @click="handleRouteChange" >{{item.name}}</span>
            </router-link>

            <button @click="handleLogout">
            {{ user.name?  'LOGOUT' : 'LOGIN' }}
            </button>
        </nav>
        <div class="search-box">
            <span>
            <svg class="svg-icon-search " xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19"><path fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" d="M3.12958 3.12959C0.928303 5.33087 0.951992 8.964 3.23268 11.2447C5.51337 13.5254 9.14649 13.5491 11.3478 11.3478C13.549 9.14651 13.5254 5.51338 11.2447 3.23269C8.96398 0.951993 5.33086 0.928305 3.12958 3.12959ZM2.17202 12.3054C-0.671857 9.46147 -0.740487 4.87834 2.06892 2.06893C4.87833 -0.740488 9.46145 -0.671858 12.3053 2.17203C15.1492 5.01591 15.2178 9.59904 12.4084 12.4085C9.59902 15.2179 5.0159 15.1492 2.17202 12.3054ZM16.4655 17.589L12.5285 13.589L13.5976 12.5368L17.5346 16.5368L16.4655 17.589Z" transform="translate(0 3)"></path>
            </svg>
            </span>
            <label>
                <input type="text"
                       v-model="search"
                       @input="handleSearch"
                       placeholder="search ">
            </label>
        </div>
        <router-link :to="'/cart'">
            <svg class="svg-icon-cart " width="24" height="24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.69409 1.5H0V0H4.86572L7.81445 11.8106C7.84204 11.9219 7.94214 12 8.05688 12H19.1235C19.2297 12 19.3242 11.9331 19.3594 11.833L21.8237 4.83301C21.8809 4.67039 21.7603 4.5 21.5879 4.5H7.5L7.16357 3H21.5879C22.7947 3 23.6392 4.19275 23.2385 5.3311L20.7744 12.3311C20.5278 13.0315 19.866 13.5 19.1235 13.5H8.05688C7.25366 13.5 6.55371 12.9532 6.35913 12.1739L3.69409 1.5ZM19 16.25C19 17.0784 18.3284 17.75 17.5 17.75C16.6716 17.75 16 17.0784 16 16.25C16 15.4216 16.6716 14.75 17.5 14.75C18.3284 14.75 19 15.4216 19 16.25ZM9.5 17.75C10.3284 17.75 11 17.0784 11 16.25C11 15.4216 10.3284 14.75 9.5 14.75C8.67163 14.75 8 15.4216 8 16.25C8 17.0784 8.67163 17.75 9.5 17.75Z" transform="translate(0 7)"></path></svg>
            {{cart.length}}
        </router-link>
    </header>
</template>

<script>
    import HambMenuIcon from "@/components/HambMenuIcon";
    export default {
        name: 'NavBar',
        data() {
            return {
                search:'',
                nav: [
                    {
                        name: 'Home',
                        to: '/home'
                    },

                    {
                        name: 'Cakes',
                        to: '/cakes/:id'
                    },
                    {
                        name: 'Cupcakes',
                        to: '/cupcakes/:id'
                    },
                    {
                        name: 'Cookies',
                        to: '/cookies/:id'
                    },
                    {
                        name: 'About',
                        to: '/about'
                    },

                    {
                        name: 'Contact',
                        to: '/contact'
                    },
                    {
                        name: 'Profile',
                        to:'/profile',
                    }
                ],
                isOpen:false,
            }
        },
        components: {
            HambMenuIcon
        },
        computed: {
            cart(){
                return this.$store.state.cart
            },
            cakes(){
                return this.$store.state.cakes
            },
            cookies(){
                return this.$store.state.cookies
            },
            cupcakes(){
                return this.$store.state.cupcakes
            },
            user(){
                return this.$store.state.user
            }
        },


        methods: {
            handleLogout(){
                this.$store.dispatch('logout')

            },
            handleHambIcon() {
                this.isOpen=!this.isOpen
                this.$refs.navBar.style.height = this.isOpen ? '100%' : '14%'
            },
            handleRouteChange(){
                this.isOpen=false
                this.$refs.navBar.style.height= '14%'

            },
            handleSearch(){
                this.$store.commit('SEARCH_CAKES',this.search)
                this.$store.commit('SEARCH_CUPCAKES',this.search)
                this.$store.commit('SEARCH_COOKIES',this.search)

            },
        }
    }
</script>


<style lang="scss">

.nav-bar {
    @media only screen and (min-width: 0) {
        height: 100px;
        top: 0;
        left: 0;
        overflow: hidden;
        border-bottom: 1px solid lightslategrey;
        transition: height 0.5s ease-in-out;
        background-color: white;

        > div {
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        nav {
            margin-top: 120px;
        }
        a {
            margin: 24px 0;
            display: block;
            text-decoration: none;

        }
        .search-box {
            position: relative;
            right:50px;
        }

    }

    @media only screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            margin-top: 0;
            align-items: center;

            a {
                margin: 0 16px;
                display: inline-block;


            }
        }
        .search-box {
            position: relative;
            left: 200px;
        }
    }
}



</style>
