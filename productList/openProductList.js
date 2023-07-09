import data from "../data.js";
import createProduct from "./createProductList.js";

// cтворюю подію відкриття товарів при натисканні
function openProduct(categoryClass, containerClass) {
  const categories = document.querySelector(categoryClass);
  const productContainer = document.querySelector(containerClass);

  const listProduct = document.createElement("ul");
  productContainer.append(listProduct);

  categories.addEventListener("click", () => {
    let categoryProduct = event.target.textContent;
    createProduct(listProduct, categoryProduct, data, productContainer);
  });
}

export default openProduct;
