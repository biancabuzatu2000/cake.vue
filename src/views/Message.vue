<template>
    <div>
        <h1>This message was sent!</h1>
        <div class="message-page main-grid">
    <router-link :to="'/contact'">
        <button>
            BACK
        </button>
    </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        }
    }
</script>

<style lang="scss">

</style>