<template>
    <i class="hamb-menu-icon"
       @click="toggleIcon"
       :class="{'is-open': isOpen}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </i>
</template>

<script>
    export default {
        name: 'HambMenuIcon',
        props:['isOpen'],
        methods:{
            toggleIcon (){
                this.$emit('action')
            },

        }
    }
</script>

<style lang="scss">
.hamb-menu-icon {
        span {
            display: block;
            width: 33px;
            border-bottom: 1px solid black;
            transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

            &:first-child,
            &:last-child {
                animation: close 0.2s normal forwards ease-in-out;

            }

            &:first-child {
                transform: translateY(-8px);
            }

            &:nth-child {
                transform: translateY(-1px);
            }

            &:last-child {
                transform: translateY(8px);
            }

        }
        &.is-open {
            span {
                &:first-child,
                &:last-child {
                    animation: open 0.2s normal forwards ease-in-out;

                }

                &:nth-child(2) {
                    transform: rotate(-45deg);
                }

                &:nth-child(3) {
                    transform: rotate(-45deg);
                }
            }
        }

    @media only screen and (min-width: 1024px){
     display: none;
    }
}
@keyframes open {
    0% {
        opacity: 1;

    }
    100% {
        opacity: 0;
    }

}
@keyframes close {
    0% {
        opacity: 0;

    }
    60% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }

}


</style>
