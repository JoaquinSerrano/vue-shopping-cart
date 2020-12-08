<template>
  <b-container v-if="searchedProducts.length">
    <b-row>
      <paginate name="searchedProducts" :list="searchedProducts" :per="perPage">
        <b-card-group columns>
          <product-item
            v-for="product in paginated('searchedProducts')"
            :key="product.id"
            :product="product"
            @addToCart="addProduct"
          />
        </b-card-group>
      </paginate>
    </b-row>
    <b-row class="mt-5" align-h="center">
      <paginate-links
        for="searchedProducts"
        :classes="{ ul: 'pagination', li: 'page-item', 'li > a': 'page-link' }"
      ></paginate-links>
    </b-row>
  </b-container>
  <b-container v-else>
    <b-alert show>No hay productos para mostrar</b-alert>
  </b-container>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import ProductItem from "@/components/ProductItem";
export default {
  components: {
    ProductItem,
  },
  mounted() {
    this.fetchProducts();
  },
  data() {
    return {
      paginate: ["searchedProducts"],
      perPage: 3,
    };
  },
  computed: {
    ...mapState("products", ["products"]),
    ...mapGetters("products", ["searchedProducts"]),
    ...mapState("cart", ["cart"]),

    // Fix para el error de vue-paginate, no renderiza los items si tras buscar no existe producto
    renderProducts() {
      return Math.floor(Math.random() * 101);
    },
  },
  methods: {
    ...mapMutations("cart", ["addProduct"]),
    ...mapActions("products", ["fetchProducts"]),
  },
};
</script>
