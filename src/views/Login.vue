<template>
    <main class="login-page">
        <h6>Login <br>Welcome!</h6>

        <form @submit.prevent="handleLogin">
            <label>
                <input type="text"
                       v-model="user.email"
                       placeholder="email">
            </label>

            <label>
                <input type="password"
                       v-model="user.password"
                       placeholder="password">
            </label>

            <h7>Forgot Password?</h7>
            <button>
                LOGIN
            </button>
        </form>

    </main>
</template>

<script>
    export default {
        name: 'Log In',
        data(){
            return{
                user:{
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            handleLogin () {
                this.$store.dispatch('login',this.user)
            }
        }
    }
</script>

<style lang="scss">
    .login-page {
        background-image: url("https://www.hdwallpapers.in/download/white_flowers_branches_in_white_background_hd_white_aesthetic-HD.jpg");
        height:auto;
        width: auto;
        border: none;
        padding: 225px 0;
        background-repeat: no-repeat;
        background-size: cover;
        form {

            margin: 0 auto;
            text-align: left;
            width: 400px;
            border-radius: 22px;
            color:#664141;
            input, textarea {
                display: block;
                width: 100%;
                resize: none;
                margin-bottom: 16px;
                height: 30px;
                padding-left: 8px;
            }

            button {
                padding: 11px 20px;
                border-radius: 212px;
                display: block;
                margin-left: auto;
                color:white;
                margin-top: 20px;
                background-color:#664141;
                border: none;
            }
        }
        h6 {
            font-size: 30px;
            color:#664141;
            text-align: center;
        }

        h7 {
            font-size: 15px;
            color:#664141;
            text-align: center;
        }

    }
</style>