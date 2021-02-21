<!--
    https://www.vuemastery.com/courses/intro-to-vue-3/computed-properties-vue3
    https://github.com/Code-Pop/Intro-to-Vue-3/tree/L8-start
-->
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="assets/images/favicon.ico">
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
                    <img :class="{'out-of-stock-img': !inStock}" :src="variants[selectedVariant].image" :alt="description">
                </div>
                <div class="product-info">
                    <h1>{{ title }}{{ saleListing }}</h1>

                    <p v-if="inStock > 10">In stock</p>
                    <p v-else-if="inStock > 0">Only {{ inStock }} left!</p>
                    <p v-else>Out of stock</p>

                    <div v-for="(size, index) in sizes" :key="index">{{ size }}</div>

                    <div class="color-circle" v-for="(variant, index) in variants" :key="variant.id" :title="variant.color" @mouseover="updateVariant(index)" :style="{backgroundColor: variant.color}"></div>

                    <p>{{ description }}</p>

                    <span v-for="detail in details">
                        {{ detail }}
                        <span v-if="detail != getLastArrayElement(details)"> | </span>
                    </span>

                    <button class="button" :class="{disabledButton: !inStock}" @click="addToCart" :disabled="!inStock">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>

    <script src="assets/scripts/main.js"></script>
</body>
</html>
