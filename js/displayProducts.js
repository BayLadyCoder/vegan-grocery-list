import { products } from "./data/products.js";
import { renderProductCards } from "./utils/productHelpers.js";
import { addAddToListButtonEventListeners } from "./features/addToOrRemoveFromList.js";

let displayProducts = [...products];

export const getDisplayProducts = () => displayProducts;
export const setDisplayProducts = (newProducts) => {
  displayProducts = [...newProducts];
  const productsContainer = document.querySelector(".products-container");
  productsContainer.replaceChildren();
  renderProductCards(displayProducts);
  addAddToListButtonEventListeners();
};
