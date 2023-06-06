import massageBuy from "./massageBuy.js";

//створюю текстове інформацію про товар
function createInfo(product, container) {
  const buyButon = document.createElement("a");
  buyButon.textContent = "купити";
  buyButon.setAttribute("href", "#");

  container.innerHTML = `
  <div>announced: ${product.infoProduct.announced}</div>
  <div>display: ${product.infoProduct.display}</div>
  <div>camera: ${product.infoProduct.camera} </div>`;
  container.append(buyButon);

  massageBuy(buyButon, product, container);
}

export default createInfo;
