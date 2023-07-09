function createInfo(container, productContainer, list, product) {
  let result = `
    <div>you have bought <b>${product.nameProduct}</b></div>
    <div>Here you can see all your information:</div>
  `;

  list.forEach(
    (item) =>
      (result += `<div>${item.elName} - ${item.elValue || "isn't"}</div>`)
  );

  productContainer.innerHTML = "";
  container.innerHTML = result;
}

export default createInfo;
