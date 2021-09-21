(async function main() {
  const { el } = await import("./el.js");

  // Code
  const cardsContainer = document.getElementById("cards-container");
  const addCardButton = document.getElementById("add-card");

  function addCard({ term = "", body = "" } = {}) {
    const card = el("div", {
      className: "card",
    });
    const termInput = el("input", {
      "aria-label": "term",
      name: "t",
      required: true,
      value: term,
    });
    const bodyTextarea = el("textarea", {
      "aria-label": "body",
      name: "b",
      required: true,
      value: body,
    });
    const deleteButton = el("button", {
      className: "subtle",
      textContent: 'Delete'
    });
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      card.remove();
    });
    card.appendChild(termInput);
    card.appendChild(bodyTextarea);
    card.appendChild(deleteButton);
    cardsContainer.appendChild(card);
  }

  addCardButton.addEventListener("click", (event) => {
    event.preventDefault();
    addCard();
  });

  addCard();
})();
