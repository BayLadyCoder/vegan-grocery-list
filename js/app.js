import { renderProductCards } from "./utils/productHelpers.js";
import { addEventListeners } from "./eventListeners.js";
import { getDisplayProducts } from "./displayProducts.js";

renderProductCards(getDisplayProducts());
addEventListeners();

// todo: create add to list function (save to local storage)
// todo: display grocery list (get data from local storage)
// todo: display button correctly according to product on the list
// todo: implement filter by functionality
// todo: create add product form (name (a-zA-Z and spaces only) , category(dropdown), media urls (validate urls))
// todo: create add product function (save to local storage)
// todo: create product detail page
