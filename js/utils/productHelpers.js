export const createProductCardHTML = (product, isOnList) => {
  const buttonClass = isOnList ? "remove-from-list" : "add-to-list";
  const buttonText = isOnList ? "REMOVE FROM LIST" : "ADD TO LIST";
  return `
              <div class="product-card">
                  <h3>${product.name}</h3>
                  <img
                      class="product-image"
                      src="${product.media[0].url}"
                      alt="${product.name}"
                  />
                  <div class="flex-center-center gap-10">
                      <input
                        class="product-quantity"
                        type="number"
                        min="1"
                        max="100"
                        value="1"
                        name=""
                        id=""
                      />
                      <button class="add-btn ${buttonClass}">${buttonText}</button>
                      <button class="add-btn info-btn"><a href="/bananas.html">INFO</a></button>
                  </div>
              </div>
          `;
};

export const renderProductCards = (products = []) => {
  const productsContainer = document.querySelector(".products-container");
  products.forEach((product) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      createProductCardHTML(product, false)
    );
  });
};
