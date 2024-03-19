"use strict";
const input = document.querySelector("input");
const list = document.getElementById("list");
input === null || input === void 0 ? void 0 : input.addEventListener("keypress", addItem);
function addItem(event) {
    if (event.keyCode !== 13 || !input || !list) {
        return;
    }
    const date = new Date();
    const currentDatetime = date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Manaus",
        hour12: false,
    });
    const card = document.createElement("div");
    card.classList.add("card");
    const content = document.createElement("div");
    content.classList.add("content");
    const title = document.createElement("h2");
    title.textContent = input.value;
    const datetime = document.createElement("p");
    datetime.textContent = currentDatetime;
    const action = document.createElement("div");
    action.classList.add("action");
    const btnEdit = document.createElement("input");
    btnEdit.setAttribute("type", "button");
    btnEdit.value = "Editar";
    btnEdit.addEventListener("click", () => {
        editItem(card);
    });
    const btnDelete = document.createElement("input");
    btnDelete.setAttribute("type", "button");
    btnDelete.value = "Apagar";
    btnDelete.addEventListener("click", () => {
        deleteItem(card);
    });
    content.appendChild(title);
    content.appendChild(datetime);
    action.appendChild(btnEdit);
    action.appendChild(btnDelete);
    card.appendChild(content);
    card.appendChild(action);
    list.appendChild(card);
    input.value = "";
}
function deleteItem(item) {
    list === null || list === void 0 ? void 0 : list.removeChild(item);
}
function editItem(item) {
    //
}
