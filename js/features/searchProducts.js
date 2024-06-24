import { products } from "../data/products.js";
import { renderProductCards } from "../utils/productHelpers.js";

const searchProduct = (partialProductName) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(partialProductName.toLowerCase())
  );
};

export const addSearchProductInputEventListener = () => {
  const searchProductInput = document.getElementById("search-product-input");
  searchProductInput.addEventListener("keyup", (e) => {
    const result = searchProduct(e.target.value);
    const productsContainer = document.querySelector(".products-container");
    productsContainer.replaceChildren();
    renderProductCards(result);
  });
};
