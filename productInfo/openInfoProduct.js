import createInfo from "./createInforProduct.js";

// створюю подію відкриття інформації при натисканні
function openInfoProduct(product, infoProduct, infoBlockClass) {
  const infoContainer = document.querySelector(infoBlockClass);

  product.addEventListener("click", () => {
    createInfo(infoProduct, infoContainer);
  });
}

export default openInfoProduct;
