"use strict";
const input = document.querySelector("input");
const list = document.getElementById("list");
const activities = new Map();
const TIME_FORMAT = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Manaus",
    hour12: false,
};
input.addEventListener("keypress", (e) => {
    if (e.key != "Enter") {
        return;
    }
    const date = new Date();
    const datetime = date.toLocaleString("pt-BR", TIME_FORMAT);
    const newTask = [input.value, `Criado em ${datetime}`];
    const index = activities.size;
    activities.set(index, newTask);
    input.value = "";
    addItem(newTask, index);
});
const deleteItem = (index) => {
    const item = list.querySelector(`#item${index}`);
    list.removeChild(item);
    activities.delete(index);
};
const editItem = (index) => {
    var _a, _b, _c, _d;
    const newTitle = window.prompt("Digite o novo título");
    if (!newTitle || !newTitle.trim()) {
        alert("Por favor, digite um valor válido!");
        return;
    }
    const date = new Date();
    const datetime = date.toLocaleString("pt-BR", TIME_FORMAT);
    activities.set(index, [newTitle, `Editado em ${datetime}`]);
    const item = list.querySelector(`#item${index}`);
    item.querySelector("h2").textContent = (_b = (_a = activities.get(index)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "";
    item.querySelector("p").textContent = (_d = (_c = activities.get(index)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : "";
};
const addItem = (activity, index) => {
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
    card.id = `item${index}`;
    list.appendChild(card);
};
// If there are items in activities
const showItems = () => {
    if (!activities) {
        return;
    }
    activities.forEach((activity, index) => {
        addItem(activity, index);
    });
};
showItems();
