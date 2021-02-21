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
            Cart ({{ cart.length }})<br>
            <button @click="emptyCart()">Empty Cart</button>
        </div>
        <product-display :premium="premium" :shipping="shipping" @add-to-cart="addToCart" @remove-from-cart="removeFromCart"></product-display>
    </section>

    <script src="assets/scripts/main.js"></script>
    <script src="components/ProductDisplay.js"></script>

    <script>app.mount('#app');</script>
</body>
</html>
