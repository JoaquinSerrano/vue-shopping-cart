export function totalCost(state) {
  return state.cart.reduce((sum, product) => {
    return sum + product.price * product.qty;
  }, 0);
}

export function productsInCart(state) {
  return state.cart.reduce((sum, product) => {
    return sum + product.qty;
  }, 0);
}
