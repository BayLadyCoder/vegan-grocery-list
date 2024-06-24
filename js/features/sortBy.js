import { getDisplayProducts, setDisplayProducts } from "../displayProducts.js";

export const addSortBySelectEventListener = () => {
  const sortBySelect = document.querySelector("#sort-by-select");
  sortBySelect.addEventListener("change", (e) => {
    const { value } = e.target;
    let sortedProducts = getDisplayProducts();

    if (value === "A-Z") {
      sortedProducts = sortedProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (value === "Z-A") {
      sortedProducts = sortedProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    } else {
      sortedProducts = sortedProducts.sort((a, b) => a.id - b.id);
    }
    setDisplayProducts(sortedProducts);
  });
};
