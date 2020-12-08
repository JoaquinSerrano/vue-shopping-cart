<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-5">
      <b-navbar-brand href="#">Vue Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar Producto"
              @input="searchProduct($event)"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Buscar</b-button
            >
          </b-nav-form>
          <b-nav-text class="cart-button" v-b-toggle.sidebar-1>
            <span>Mi carrito:</span>
            <span class="cart-button__total-products">{{
              productsInCart
            }}</span>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["productsInCart"]),
  },
  methods: {
    ...mapMutations("products", ["searchProduct"]),
  },
};
</script>

<style>
.cart-button {
  display: flex !important;
  align-items: center;
  margin-left: 30px;
  padding: 0 20px;
  background: white;
  color: gray !important;
  font-size: 14px;
}
.cart-button__total-products {
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #17a2b8 !important;
  color: white;
  margin-left: 10px;
}
</style>
