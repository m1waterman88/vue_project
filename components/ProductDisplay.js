app.component('product-display', {
  props: {
    premium: {
      required: true,
      type: Boolean
    },
    shipping: {
      required: true,
      type: Number
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
              <h1>{{ title }}</h1>

              <p v-if="inStock > 10">In stock</p>
              <p v-else-if="inStock > 0">Only {{ inStock }} left!</p>
              <p v-else>Out of stock</p>

              <p class="sale">{{ saleListing }}</p>
              <p>{{ '$' + currentPrice }} + {{ shippingCost }} shipping</p>

              <div class="color-flex">
                <div class="color-circle" v-for="(variant, index) in variants" :key="variant.id" :title="variant.color" @mouseover="updateVariant(index)" :style="{backgroundColor: variant.color}"></div>
              </div>

              <p>{{ description }}</p>

              <span v-for="detail in details">
                {{ detail }}
                <span v-if="detail != getLastArrayElement(details)"> | </span>
              </span>

              <button class="button" :class="{disabledButton: !inStock}" @click="addToCart" :disabled="!inStock">Add to Cart</button>

              <button class="button" :class="{disabledButton: !inStock}" @click="removeFromCart()" :disabled="!inStock">Remove from Cart</button>
          </div>
      </div>
    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      details: ['50% cotton', '30% wool', '20% polyester'],
      discount: 10,
      product: 'Socks',
      selectedVariant: 0,
      variants: [
        {id: 2234, color: 'blue', image: 'assets/images/socks_blue.jpg', inventory: 2, onSale: false, price: 7.99},
        {id: 2235, color: 'green', image: 'assets/images/socks_green.jpg', inventory: 16, onSale: true, price: 7.99},
      ],
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    getLastArrayElement(arrayToParse = []) {
      if (!arrayToParse) {
        return null;
      }

      return arrayToParse[arrayToParse.length - 1];
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  // Performance boost since the value is cached
  computed: {
    currentPrice() {
      if (this.variants[this.selectedVariant].onSale) {
        const regularPrice = this.variants[this.selectedVariant].price;

        return (regularPrice - (regularPrice * (this.discount / 100))).toFixed(2);
      }

      return this.variants[this.selectedVariant].price;
    },
    description() {
      return `Long ${this.title} socks for warm feet`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].inventory;
    },
    saleListing() {
      if (this.variants[this.selectedVariant].onSale) {
        return `Save ${this.discount}%!`;
      }

      return 'Great value!';
    },
    shippingCost() {
      return this.premium ? 'Free' : `$${this.shipping}`;
    },
    title() {
      return `${this.brand} ${this.product}`;
    }
  }
});
