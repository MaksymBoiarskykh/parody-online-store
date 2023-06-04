// створюю та викликаю при натисканні повідомлення про купівлю
function massageBuy(button, product, container) {
  const massageBlock = document.createElement("div");

  const createMassage = () => {
    const lastButton = document.createElement("a");
    massageBlock.classList.add("massage-block");
    lastButton.classList.add("last-button");
    lastButton.textContent = "Підтвердити";
    massageBlock.innerHTML = `
    <div>${product.textContent} куплено</div>
    `;
    massageBlock.append(lastButton);
    container.append(massageBlock);

    lastButton.addEventListener("click", () => location.reload());
  };

  button.addEventListener("click", createMassage);
}

export default massageBuy;
