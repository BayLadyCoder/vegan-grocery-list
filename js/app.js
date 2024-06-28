import { renderProductCards } from "./utils/productHelpers.js";
import { addEventListeners } from "./eventListeners.js";
import { getDisplayProducts } from "./displayProducts.js";

renderProductCards(getDisplayProducts());
addEventListeners();
