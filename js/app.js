import { renderProductCards } from "./utils/productHelpers.js";
import { addEventListeners } from "./eventListeners.js";
import { getDisplayProducts } from "./displayProducts.js";

console.log(window.location.pathname);
const { pathname } = window.location;

if (pathname === "/index.html" || pathname === "/") {
  renderProductCards(getDisplayProducts());
  addEventListeners();
}

// todo: create add product form (name (a-zA-Z and spaces only) , category(radio buttons), media urls (validate urls), mediaType (dropdown, image or video))
// todo: add form validation using RegEx
// todo: create product detail page (carousel, product description, nutrition facts table)
// todo: create add to list function
// todo: display button correctly according to product on the list

// ! bonus
// todo: save/retrieve grocery  list to/from local storage
// todo: create add product function (save to local storage)
