const input: HTMLInputElement | null = document.querySelector("input");
const list: HTMLElement | null = document.getElementById("list");

const activities: [string, string][] = [];

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "America/Manaus",
  hour12: false,
};

input?.addEventListener("keypress", addItem);

function addItem(event: { keyCode: number }): void {
  if (event.keyCode !== 13 || !input || !list) {
    return;
  }

  const date: Date = new Date();

  const datetime: string = date.toLocaleString("pt-BR", TIME_FORMAT);

  activities.push([input.value, `Criado em ${datetime}`]);

  input.value = "";
  showItems();
}

const deleteItem = (index: number): void => {
  activities.splice(index, 1);
  showItems();
};

const editItem = (index: number): void => {
  const newTitle: string | null = window.prompt("Digite o novo título");
  if (!newTitle || !newTitle.trim()) {
    alert("Por favor, digite um valor válido!");
    return;
  }

  const date: Date = new Date();

  const datetime: string = date.toLocaleString("pt-BR", TIME_FORMAT);

  activities[index][0] = newTitle;
  activities[index][1] = `Editado em ${datetime}`;
  showItems();
};

const showItems = (): void => {
  if (!list || !activities) {
    return;
  }

  list.innerHTML = "";

  activities.map((activity, index) => {
    const card: HTMLDivElement = document.createElement("div");
    card.classList.add("card");

    const content: HTMLDivElement = document.createElement("div");
    content.classList.add("content");

    const title: HTMLHeadingElement = document.createElement("h2");
    title.textContent = activity[0];

    const datetime: HTMLParagraphElement = document.createElement("p");
    datetime.textContent = activity[1];

    const action: HTMLDivElement = document.createElement("div");
    action.classList.add("action");

    const btnEdit: HTMLInputElement = document.createElement("input");
    btnEdit.setAttribute("type", "button");
    btnEdit.value = "Editar";
    btnEdit.addEventListener("click", () => {
      editItem(index);
    });

    const btnDelete: HTMLInputElement = document.createElement("input");
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
