import validation from "./validation.js";

function createForm(button, product, container, productContainer) {
  const form = document.createElement("form");

  const createMassage = () => {
    form.innerHTML = `
     <form action="">
        <div>
            <label for="full-name">Full name:</label>
            <input type="text" id="full-name" name="full-name">
        </div>
        <div>
            <label for="town">Choose a town:</label>
            <select id="town" name="town">
                <option value="Dnipro">Dnipro</option>
                <option value="Kyiv">Kyiv</option>
                <option value="Lviv">Lviv</option>
            </select>
        </div>
         <div>
           <label for="mail">Composition of mail to be sent:</label>
           <textarea id="mail" name="email" rows="1" cols="20"></textarea>
        </div>
        <div>
            <label for="payments">Postpaid or bank card payments:</label>
            <select id="payments" name="payment method">
                <option value="postpaid">postpaid</option>
                <option value="bank card">bank card</option>
            </select>
        </div>
        <div>
            <label for="quantity"> Quantity of products purchased:</label>
            <input type="number" id="quantity" name="quantity">
        </div>
        <div>
           <label for="comment">Comment on the order:</label>
           <textarea id="comment" name="comment" rows="1" cols="20"></textarea>
        </div>
    </form>
    `;

    const btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.value = "click";
    form.append(btn);
    container.append(form);

    btn.addEventListener("click", () => {
      validation(
        container,
        productContainer,
        product,
        "full-name",
        "town",
        "mail",
        "payments",
        "quantity",
        "comment"
      );
    });
  };

  button.addEventListener("click", () => {
    createMassage();
  });
}

export default createForm;
