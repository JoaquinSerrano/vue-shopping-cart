<template>
  <b-col>
    <b-card
      :title="product.title"
      :img-src="product.image"
      img-alt="Image"
      img-top
      tag="article"
    >
      <b-card-text>
        {{ product.description }}
      </b-card-text>

      <b-button href="#" variant="primary" @click="addToCart"
        >Comprar ahora</b-button
      >
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    },
  },
};
</script>

<style></style>
