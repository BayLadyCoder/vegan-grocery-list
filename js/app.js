import { renderProductCards } from "./utils/productHelpers.js";
import { addEventListeners } from "./eventListeners.js";
import { getDisplayProducts } from "./displayProducts.js";

console.log(window.location.pathname);
const { pathname } = window.location;

if (pathname === "/index.html" || pathname === "/") {
  renderProductCards(getDisplayProducts());
  addEventListeners();
}

// todo: create add to list function
// todo: display button correctly according to product on the list

// ! bonus
// todo: save/retrieve grocery  list to/from local storage
// todo: create add product function (save to local storage)

const addToListButtons = document.querySelectorAll(".add-btn");
addToListButtons.forEach((addToListButton) => {
  addToListButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (addToListButton.classList.contains("add-to-list")) {
      addToListButton.textContent = "REMOVE FROM LIST";
      addToListButton.classList.remove("add-to-list");
      addToListButton.classList.add("remove-from-list");
    } else {
      addToListButton.textContent = "ADD TO LIST";
      addToListButton.classList.remove("remove-from-list");
      addToListButton.classList.add("add-to-list");
    }
  });
});
