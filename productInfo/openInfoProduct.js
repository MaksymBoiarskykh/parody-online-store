import createInfo from "./createInforProduct.js";

// створюю подію відкриття інформації при натисканні
function openInfoProduct(elList, product, infoBlockClass) {
  const infoContainer = document.querySelector(infoBlockClass);

  elList.addEventListener("click", () => {
    createInfo(product, infoContainer);
  });
}

export default openInfoProduct;
