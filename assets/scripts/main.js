Vue.createApp({
  data() {
    return {
      cart: 0,
      description: 'Long Vue socks for warm feet',
      details: ['50% cotton', '30% wool', '20% polyester'],
      discount: '10%',
      image: 'assets/images/socks_blue.jpg',
      inventory: 2,
      onSale: true,
      product: 'Socks',
      sizes: ['S', 'M', 'L'],
      variants: [
        {id: 2234, color: 'green', image: 'assets/images/socks_green.jpg'},
        {id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg'},
      ],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
      this.inventory -= 1;
    },
    emptyCart() {
      this.inventory = 2;
      this.cart = 0;
    },
    getLastArrayElement(arrayToParse = []) {
      if (!arrayToParse) return null;
      return arrayToParse[arrayToParse.length - 1];
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
        this.inventory += 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    }
  }
}).mount('#app');
