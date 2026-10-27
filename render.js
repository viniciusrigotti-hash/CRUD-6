export function createItem(id, text) {
    const li = document.createElement("li");
    li.className = "item";
    li.dataset.id = id;
    li.innerHTML = `
        <div class="itemText"></div>
        <div class="itemButton">
            <button class="edit">EDIT</button>
            <button class="remove">REMOVE</button>
        </div>`;
    li.querySelector(".itemText").textContent = text;
    return li;
};