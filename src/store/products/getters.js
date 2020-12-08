export function searchedProducts(state) {
  if (state.productToSearch.length > 2) {
    return state.products.filter((product) =>
      product.title.toLowerCase().includes(state.productToSearch)
    );
  }
  return state.products;
}
