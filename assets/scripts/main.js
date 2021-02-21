const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      shipping: 2.99
    }
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    emptyCart() {
      this.cart.length = 0;
    },
    removeFromCart(id) {
      const index = this.cart.indexOf(id);

      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  }
});
