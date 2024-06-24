import { products } from "../data/products.js";
import { renderProductCards } from "../utils/productHelpers.js";

const searchProduct = (partialProductName) => {
  return products.filter((product) =>
    product.name.includes(partialProductName)
  );
};

export const addSearchProductInputEventListener = () => {
  const searchProductInput = document.querySelector("#search-product-input");
  searchProductInput.addEventListener("change", (e) => {
    const result = searchProduct(e.target.value);
    const productsContainer = document.querySelector(".products-container");
    productsContainer.replaceChildren();
    renderProductCards(result);
  });
};
