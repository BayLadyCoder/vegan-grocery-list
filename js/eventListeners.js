import { addSearchProductInputEventListener } from "./features/searchProducts.js";
import { addSortBySelectEventListener } from "./features/sortBy.js";
import { addFilterByCheckboxesEventListeners } from "./features/filterByCategories.js";
import { addAddToListButtonEventListeners } from "./features/addToOrRemoveFromList.js";

export const addEventListeners = () => {
  addSearchProductInputEventListener();
  addSortBySelectEventListener();
  addFilterByCheckboxesEventListeners();
  addAddToListButtonEventListeners();
};
