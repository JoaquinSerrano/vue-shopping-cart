<template>
  <div id="app">
    <top-header />
    <cart-sidebar></cart-sidebar>
    <product-list />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import TopHeader from "@/components/Header";
import CartSidebar from "@/components/Sidebar";

export default {
  name: "App",
  components: {
    ProductList,
    TopHeader,
    CartSidebar,
  },
};
</script>

<style></style>
