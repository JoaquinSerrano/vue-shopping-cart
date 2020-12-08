export async function fetchProducts({ commit }) {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    commit("products/setProducts", products, { root: true });
  } catch (error) {}
}
