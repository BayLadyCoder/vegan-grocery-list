import { renderProductCards } from "./utils/productHelpers.js";
import { addEventListeners } from "./eventListeners.js";
import { products } from "./data/products.js";

renderProductCards(products);
addEventListeners();

// todo: create add to list function (save to local storage)
// todo: display grocery list (get data from local storage)
// todo: display button correctly according to product on the list
// todo: implement sort by functionality
// todo: implement filter by functionality
// todo: create add product form
// todo: create add product function (save to local storage)
