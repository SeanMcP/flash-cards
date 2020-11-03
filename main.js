// @ts-check
import { CardStore } from "./store.js";

(() => {
  // Code
  const fieldsContainer = document.getElementById("fields");

  function addField([termValue, descriptionValue] = []) {
    const field = document.createElement("div");
    field.classList.add("field");

    const input = document.createElement("input");
    input.setAttribute("aria-label", "term");
    input.name = "term";
    input.placeholder = "Term";
    input.required = true;
    if (termValue) input.value = termValue;
    field.appendChild(input);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      field.remove();
    });
    field.appendChild(deleteButton);

    const textarea = document.createElement("textarea");
    textarea.setAttribute("aria-label", "definition");
    textarea.name = "definition";
    textarea.placeholder = "Definition...";
    textarea.required = true;
    if (descriptionValue) textarea.value = descriptionValue;
    field.appendChild(textarea);

    fieldsContainer.appendChild(field);
  }

  // Initialize with one field
  addField();

  document.getElementById("add-field").addEventListener("click", (event) => {
    event.preventDefault();
    addField();
  });

  document
    .getElementById("create-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const fd = new FormData(event.target);
      const terms = fd.getAll("term");
      const defs = fd.getAll("definition");
      const doShare = fd.get("share") === "on";

      const data = terms.map((term, i) => [term, defs[i]]);
      CardStore.set(data);
      if (doShare) {
        // TODO: Make network request
      }
    });
})();
