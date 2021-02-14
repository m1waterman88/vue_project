<!--
    Left off: https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3

    2:32
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
        <div class="nav-bar"></div>

        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" alt="blue socks">
                </div>
                <div class="product-info">
                    <h1>{{ product }}</h1>
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
    </section>

    <script src="assets/scripts/main.js"></script>
    <script>
        const mountedApp = app.mount('#app');
    </script>
</body>
</html>
