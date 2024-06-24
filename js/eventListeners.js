import { addSearchProductInputEventListener } from "./features/searchProducts.js";
import { addSortBySelectEventListener } from "./features/sortBy.js";
import { addFilterByCheckboxesEventListeners } from "./features/filterByCategories.js";

export const addEventListeners = () => {
  addSearchProductInputEventListener();
  addSortBySelectEventListener();
  addFilterByCheckboxesEventListeners();
};
