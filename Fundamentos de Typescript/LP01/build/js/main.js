"use strict";
const input = document.querySelector("input");
const list = document.getElementById("list");
const activities = [];
const TIME_FORMAT = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Manaus",
    hour12: false,
};
input === null || input === void 0 ? void 0 : input.addEventListener("keypress", addItem);
function addItem(event) {
    if (event.keyCode !== 13 || !input || !list) {
        return;
    }
    const date = new Date();
    const datetime = date.toLocaleString("pt-BR", TIME_FORMAT);
    activities.push([input.value, `Criado em ${datetime}`]);
    input.value = "";
    showItems();
}
const deleteItem = (index) => {
    activities.splice(index, 1);
    showItems();
};
const editItem = (index) => {
    const newTitle = window.prompt("Digite o novo título");
    if (!newTitle || !newTitle.trim()) {
        alert("Por favor, digite um valor válido!");
        return;
    }
    const date = new Date();
    const datetime = date.toLocaleString("pt-BR", TIME_FORMAT);
    activities[index][0] = newTitle;
    activities[index][1] = `Editado em ${datetime}`;
    showItems();
};
const showItems = () => {
    if (!list || !activities) {
        return;
    }
    list.innerHTML = "";
    activities.map((activity, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const content = document.createElement("div");
        content.classList.add("content");
        const title = document.createElement("h2");
        title.textContent = activity[0];
        const datetime = document.createElement("p");
        datetime.textContent = activity[1];
        const action = document.createElement("div");
        action.classList.add("action");
        const btnEdit = document.createElement("input");
        btnEdit.setAttribute("type", "button");
        btnEdit.value = "Editar";
        btnEdit.addEventListener("click", () => {
            editItem(index);
        });
        const btnDelete = document.createElement("input");
        btnDelete.setAttribute("type", "button");
        btnDelete.value = "Apagar";
        btnDelete.addEventListener("click", () => {
            deleteItem(index);
        });
        content.appendChild(title);
        content.appendChild(datetime);
        action.appendChild(btnEdit);
        action.appendChild(btnDelete);
        card.appendChild(content);
        card.appendChild(action);
        list.appendChild(card);
    });
};
showItems();
