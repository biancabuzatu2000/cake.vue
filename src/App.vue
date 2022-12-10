<template>
<h1 id="app">
        <NavBar/>
        <router-view/>

</h1>
</template>


<script>
        import Cart from "@/views/Cart";
    import NavBar from "@/components/NavBar";
    export default {
       name: "App",


        components: {
            NavBar,Cart
        },



        created(){
            this.$store.dispatch('get_data')
            this.$store.dispatch('get_data_coo')
            this.$store.dispatch('get_data_cup')
        },

    }

</script>

<style lang="scss">

#app {
    height: 100%;
    width: 100%;
    font-size: 20px;
    color:#664141;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

}

a {
    font-weight: normal;
    color:#664141;
    font-size: 25px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #BDA2A2;
        text-decoration: none;


    }
  }


li {
    margin-left: 20px;
    list-style-type: none;
    font-size: 10px;

}
p {
   margin-left: 20px;
   width:100%;
   height:100%;
   font-size: 30px;

}

</style>
