app.component('review-form', {
  template:
  /*html*/
  `<!-- ".prevent" prevents a browser refresh on submit -->
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a Review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <!-- ".number" typecasts to a number -->
    <select id="rating" v-model.number="rating">
      <span v-for="ratingOption in ratingOptions">
        <option>{{ ratingOption }}</option>
      </span>
      <!--
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
      -->
    </select>

    <input class="button" type="submit" value="Submit">
  </form>
  `,
  data() {
    // element ids from the template
    return {
      name: '',
      rating: null,
      ratingOptions: [5, 4, 3, 2, 1],
      review: ''
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        rating: this.rating,
        review: this.review
      }

      this.$emit('review-submitted', productReview);

      this.name = '';
      this.rating = null;
      this.review = '';
    }
  }
})
