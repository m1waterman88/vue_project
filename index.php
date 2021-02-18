<!--
    https://www.vuemastery.com/courses/intro-to-vue-3/computed-properties-vue3
-->
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="assets/styles/style.css">

    <script src="https://unpkg.com/vue@next"></script>

    <title>Vue Store</title>
</head>
<body>
    <section id="app">
        <nav class="nav-bar"></nav>

        <div class="cart">
            Cart ({{ cart }})<br>
            <button @click="removeFromCart()">Remove from Cart</button>
            <button @click="emptyCart()">Empty Cart</button>
        </div>

        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :class="{'out-of-stock-img': !inventory}" :src="image" :alt="description">
                </div>
                <div class="product-info">
                    <h1>
                        {{ product }}<span v-show="onSale"> - {{ discount }} off!</span>
                    </h1>

                    <p v-if="inventory > 10">In stock</p>
                    <p v-else-if="inventory > 0">Only {{ inventory }} left!</p>
                    <p v-else>Out of stock</p>

                    <div v-for="(size, index) in sizes" :key="index">{{ size }}</div>

                    <div class="color-circle" v-for="variant in variants" :key="variant.id" :title="variant.color" @mouseover="updateImage(variant.image)" :style="{backgroundColor: variant.color}"></div>

                    <p>{{ description }}</p>

                    <span v-for="detail in details">
                        {{ detail }}
                        <span v-if="detail != getLastArrayElement(details)"> | </span>
                    </span>

                    <button class="button" :class="{disabledButton: !inventory || cart > inventory}" @click="addToCart" :disabled="!inventory || cart > inventory">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>

    <script src="assets/scripts/main.js"></script>
</body>
</html>
