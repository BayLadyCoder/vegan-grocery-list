import { addSearchProductInputEventListener } from "./features/searchProducts.js";
import { addSortBySelectEventListener } from "./features/sortBy.js";

export const addEventListeners = () => {
  addSearchProductInputEventListener();
  addSortBySelectEventListener();
};
