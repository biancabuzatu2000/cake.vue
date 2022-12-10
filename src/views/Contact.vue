<template>
    <main class="contact-page">
        <h5>Contact </h5>
        <form @submit.prevent="handleSubmit">
            <label>
                <input type="text"
                       placeholder="First name">
            </label>
            <label>
                <input type="text"
                       placeholder="Last name">
            </label>
            <label>
                <input type="text"
                       placeholder="Message">
            </label>
            <router-link :to="'/message'">
            <button>
                Send
            </button>
            </router-link>

        </form>
    </main>
</template>

<script>
    export default {
        name: 'Contact',
        methods: {
            handleSubmit () {
                console.log('send detail to server')
            }
        }
    }
</script>

<style lang="scss">
    .contact-page {
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
        h5{
            font-size:40px;
            color:#664141;
            text-align: center;

        }
    }
</style>