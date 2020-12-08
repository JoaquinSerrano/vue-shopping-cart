<template>
  <b-sidebar id="sidebar-1" title="Mi carrito" right shadow>
    <div class="px-3 py-2">
      <!-- <b-table striped hover :items="cart" :fields="fields">
        <template #cell(actions)="product">
          <b-button
            size="sm"
            @click="removeProductFromCart(product.item)"
            class="mr-1"
          >
            Eliminar
          </b-button>
        </template>
      </b-table> -->
      <product-in-cart />
      <b-alert show v-if="cart.length">
        Precio Total:
        <strong>{{ totalCost | truncateDecimals(2) | currency("€") }}</strong>
      </b-alert>
      <b-alert show v-else>
        No hay productos en el carrito
      </b-alert>
    </div>
  </b-sidebar>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { truncateDecimals, currency } from "@/filters";
import ProductInCart from "@/components/ProductInCart";
import ProductList from "./ProductList.vue";
export default {
  components: {
    ProductInCart,
    ProductList,
  },
  data() {
    return {
      fields: [
        {
          key: "title",
          label: "Producto",
        },
        {
          key: "qty",
          label: "Cantidad",
        },
        {
          key: "price",
          label: "Precio",
        },
        {
          key: "actions",
          label: "Acciones",
        },
      ],
    };
  },
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["totalCost"]),
  },
  filters: {
    truncateDecimals,
    currency,
  },
  methods: {
    ...mapMutations("cart", ["removeProductFromCart"]),
  },
};
</script>

<style></style>
