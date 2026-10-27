import { addItem, listenItems, updateItem, removeItem } from "./crud.js";
import { createItem  } from "./render.js";

const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

function handleAdd() {
    addItem(input.value);
    input.value = "";
};

submit.addEventListener("click", handleAdd);

listenItems(items => {
    list.innerHTML = "";
    items.forEach(({id, text}) => {
        list.appendChild(createItem(id, text));
    });
});

list.addEventListener("click", (event) => {
    const li = event.target.closest(".item");
    if (!li) return;
    const id = li.dataset.id;

    if (event.target.closest(".edit")) {
        const oldTxt = li.querySelector(".itemText").textContent;
        const newTxt = prompt("EDIT:", oldTxt);
        if (newTxt) return updateItem(id, newTxt);
    };

    if (event.target.closest(".remove")) {
        removeItem(id);
    };
});