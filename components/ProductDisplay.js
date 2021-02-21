app.component('product-display', {
  props: {
    premium: {
      required: true,
      type: Boolean
    }
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
          <div class="product-image">
              <img :class="{'out-of-stock-img': !inStock}" :src="variants[selectedVariant].image" :alt="description">
          </div>
          <div class="product-info">
              <h1>{{ title }}{{ saleListing }}</h1>

              <p v-if="inStock > 10">In stock</p>
              <p v-else-if="inStock > 0">Only {{ inStock }} left!</p>
              <p v-else>Out of stock</p>

              <p>Shipping: {{ shipping }}</p>

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
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      details: ['50% cotton', '30% wool', '20% polyester'],
      discount: '10%',
      product: 'Socks',
      selectedVariant: 0,
      sizes: ['S', 'M', 'L'],
      variants: [
        {id: 2234, color: 'blue', image: 'assets/images/socks_blue.jpg', inventory: 2, onSale: false},
        {id: 2235, color: 'green', image: 'assets/images/socks_green.jpg', inventory: 16, onSale: true},
      ],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
      this.variants[this.selectedVariant].inventory -= 1;
    },
    emptyCart() {
      // No DB connected: reset the hardcoded values for a dev playground
      this.variants[0].inventory = 2;
      this.variants[1].inventory = 16;
      this.cart = 0;
    },
    getLastArrayElement(arrayToParse = []) {
      if (!arrayToParse) return null;
      return arrayToParse[arrayToParse.length - 1];
    },
    removeFromCart() {
      if (this.cart > 0) {
        // Check hardcoded maximums so there aren't negative product inventories
        if ((this.selectedVariant === 0
              && this.variants[0].inventory === 2)
            || (this.selectedVariant === 1
              && this.variants[1].inventory === 16)) {
          return false;
        }

        this.cart -= 1;
        this.variants[this.selectedVariant].inventory += 1;
      }
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  // Performance boost since the value is cached
  computed: {
    description() {
      return `Long ${this.title} socks for warm feet`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].inventory;
    },
    title() {
      return `${this.brand} ${this.product}`;
    },
    saleListing() {
      if (this.variants[this.selectedVariant].onSale) {
        return ` - ${this.discount} off!`;
      }
    },
    shipping() {
      return this.premium ? 'Free' : '$2.99';
    },
  }
});
