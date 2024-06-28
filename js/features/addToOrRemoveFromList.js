export const addAddToListButtonEventListeners = () => {
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
        const productQtyInput = addToListButton.previousSibling.previousSibling;
        productQtyInput.value = 1;
      }
    });
  });
};
