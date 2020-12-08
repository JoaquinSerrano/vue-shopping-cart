<template>
  <div>
    <ul class="list-cart">
      <li class="list-cart__item" v-for="product in cart" :key="product.id">
        <p class="list-cart__item-title">
          {{ product.title | truncateTitleProduct(5) }}
        </p>
        <p class="list-cart__item-units">Unidades: {{ product.qty }}</p>
        <p class="list-cart__item-price">
          {{
            (product.qty * product.price) | truncateDecimals(2) | currency("€")
          }}
        </p>
        <span
          class="list-cart__remove-item"
          @click="removeProductFromCart(product)"
          >X</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { truncateTitleProduct, truncateDecimals, currency } from "@/filters";
export default {
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["totalCost"]),
  },
  filters: {
    truncateTitleProduct,
    truncateDecimals,
    currency,
  },
  methods: {
    ...mapMutations("cart", ["removeProductFromCart"]),
  },
};
</script>

<style>
.list-cart {
  list-style-type: none;
  padding: 0;
}
.list-cart__item {
  position: relative;
  padding: 10px;
  background: #e7f6f8;
  border-bottom: 1px solid #d1ecf1;
  margin-bottom: 10px;
}
.list-cart__item-title,
.list-cart__item-units,
.list-cart__item-price {
  margin-bottom: 0;
}
.list-cart__item-title {
  font-size: 14px;
  font-weight: bold;
}
.list-cart__item-units {
  font-size: 14px;
}
.list-cart__item-price {
  font-weight: bold;
}
.list-cart__remove-item {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  cursor: pointer;
}
</style>
