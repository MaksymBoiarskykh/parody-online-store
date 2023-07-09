import errorMassage from "./errorMassage.js";
import createInfo from "./createInfo.js";

function validation(container, productContainer, product, ...data) {
  let errorList = [];
  let infoList = [];

  data.forEach((item) => {
    let el = document.querySelector("#" + item);
    let elName = el.name;
    let elValue = el.value;

    if (elValue == false && item !== "comment") {
      errorList.push(elName);
    } else {
      infoList.push({ elName, elValue });
    }
  });

  if (errorList.length === 0) {
    return createInfo(container, productContainer, infoList, product);
  }

  return errorMassage(container, productContainer, errorList);
}

export default validation;
