<template>
    <div>
        <div class="home-page main-grid">
            <h1>Celebrate with a beautifully designed and delicious cake...</h1>
        </div>
        <div class="home-page1 main-grid">
           <h2>Celebrate with a beautifully designed and delicious cake.</h2>
            <p>Celebrity Cake Studio is a women and minority owned cake boutique.
                 <br>We lovingly and mindfully create products to celebrate you and the ones you love.</p>
        </div>
        <div class="home-page2 main-grid ">
            <li>
            <img src="https://cdn.shopify.com/s/files/1/0023/6797/9619/files/20220824_103834_1_640x640.jpg?v=1662072957" width="500" height="500" alt="">
                <br>
            <button>SHOP NOW</button>
            </li>
            <li>
            <img src="https://cdn.shopify.com/s/files/1/0023/6797/9619/files/20220824_111935_1_640x640.jpg?v=1662764745" width="500" height="500" alt="">
                <br>
            <button>SHOP NOW</button>
            </li>
            <li>
            <img src="https://cdn.shopify.com/s/files/1/0023/6797/9619/files/20220606_135634_640x704.jpg?v=1654549737" width="500" height="500" alt="">
                <br>
            <button>SHOP NOW</button>
            </li>
        </div>
    </div>
</template>


<style lang="scss">
.home-page {
    background-image: url("https://images6.alphacoders.com/443/443542.jpg");

    @media only screen and (min-width: 0) {

        font-size: 30px;
        text-align: left;
        height: auto;
        width: 100%;
        border: none;
        padding: 200px 0;
        background-repeat: no-repeat;
        background-size: cover;
        h1 {
            color: white;
            display: block;
            font-size: 36px;
            line-height: 1.1;
            padding: 4.5rem 2rem;
            letter-spacing: -1px;
            bottom:60px;

        }



    }


    @media only screen and (min-width: 1024px) {
        height: auto;
        width: 100%;
        border: none;
        padding: 800px 0;
        background-repeat: no-repeat;
        background-size: cover;
        h1 {
            color: white ;
            font-size: 46px;
            padding: 60px;
            position: absolute;
            bottom:60px;
        }
    }
}

.home-page1 {
    background-image: url("https://cdn.shopify.com/s/files/1/0023/6797/9619/t/8/assets/feature-background-edit.png");

    @media only screen and (min-width: 0) {
        height: 100%;
        width: auto;
        border: none;
        padding: 100px 0;
        background-repeat: no-repeat;
        background-size: cover;

    }

    @media only screen and (min-width: 1024px) {
        height: 100%;
        width: 100%;
        border: none;
        padding: 100px 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;


    }
}

    .home-page2 {
        @media only screen and (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            text-align: center;
        }
    }


</style>

















