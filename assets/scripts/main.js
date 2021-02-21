Vue.createApp({
  data() {
    return {
      brand: 'Vue Mastery',
      cart: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      discount: '10%',
      //onSale: true,
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
  }
}).mount('#app');
