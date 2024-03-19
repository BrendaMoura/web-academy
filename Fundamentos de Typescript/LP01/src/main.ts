const input: HTMLInputElement | null = document.querySelector("input");
const list: HTMLElement | null = document.getElementById("list");

input?.addEventListener("keypress", addItem);

function addItem(event: { keyCode: number }) {
  if (event.keyCode !== 13 || !input || !list) {
    return;
  }

  const date: Date = new Date();

  const currentDatetime: string = date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Manaus",
    hour12: false,
  });

  const card: HTMLDivElement = document.createElement("div");
  card.classList.add("card");

  const content: HTMLDivElement = document.createElement("div");
  content.classList.add("content");

  const title: HTMLHeadingElement = document.createElement("h2");
  title.textContent = input.value;

  const datetime: HTMLParagraphElement = document.createElement("p");
  datetime.textContent = currentDatetime;

  const action: HTMLDivElement = document.createElement("div");
  action.classList.add("action");

  const btnEdit: HTMLInputElement = document.createElement("input");
  btnEdit.setAttribute("type", "button");
  btnEdit.value = "Editar";
  btnEdit.addEventListener("click", () => {
    editItem(card);
  });

  const btnDelete: HTMLInputElement = document.createElement("input");
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

function deleteItem(item: HTMLDivElement) {
  list?.removeChild(item);
}
function editItem(item: HTMLDivElement) {
  //
}
