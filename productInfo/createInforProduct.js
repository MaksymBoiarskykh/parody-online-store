import createForm from "../form/createForm.js";

//створюю текстове інформацію про товар
function createInfo(product, container, productContainer) {
  const buyButon = document.createElement("a");
  buyButon.textContent = "купити";
  buyButon.setAttribute("href", "#");

  container.innerHTML = `
  <div>announced: ${product.infoProduct.announced}</div>
  <div>display: ${product.infoProduct.display}</div>
  <div>camera: ${product.infoProduct.camera} </div>`;
  container.append(buyButon);

  createForm(buyButon, product, container, productContainer);
}

export default createInfo;
