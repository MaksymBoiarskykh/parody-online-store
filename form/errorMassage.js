function errorMassage(container, productContainer, list) {
  let result = `<h2>you should write:</h2>`;

  list.forEach((item) => (result += `<div>${item}</div>`));

  productContainer.innerHTML = "";
  container.innerHTML = result;
}

export default errorMassage;
