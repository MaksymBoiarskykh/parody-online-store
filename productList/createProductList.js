import openInfoProduct from "../productInfo/openInfoProduct.js";

// cтворюю список товарів
const createProduct = (list, category, data) => {
  list.innerHTML = "";

  data[category].forEach((item) => {
    const listEl = document.createElement("li");
    listEl.textContent = item.nameProduct;
    list.append(listEl);

    openInfoProduct(listEl, item, ".info_block");
  });
};

export default createProduct;
