import { setDisplayProducts } from "../displayProducts.js";
import { products } from "../data/products.js";

let filterCategories = [];

export const addFilterByCheckboxesEventListeners = () => {
  const filterByCheckboxes = document.querySelectorAll(".filter-by-checkbox");

  filterByCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        filterCategories.push(e.target.name);
      } else {
        filterCategories = filterCategories.filter(
          (category) => category !== e.target.name
        );
      }

      let newDisplayProducts;

      if (filterCategories.length > 0) {
        newDisplayProducts = products.filter((product) =>
          filterCategories.includes(product.category)
        );
      } else {
        newDisplayProducts = [...products];
      }

      setDisplayProducts(newDisplayProducts);
    });
  });
};
