const input: HTMLInputElement = document.querySelector("input")!;
const list: HTMLElement = document.getElementById("list")!;

const activities = new Map<number, [string, string]>();

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
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

  const date: Date = new Date();

  const datetime: string = date.toLocaleString("pt-BR", TIME_FORMAT);

  const newTask: [string, string] = [input.value, `Criado em ${datetime}`];

  const index: number = activities.size;

  activities.set(index, newTask);

  input.value = "";

  addItem(newTask, index);
});

const deleteItem = (index: number): void => {
  const item: Element = list.querySelector(`#item${index}`)!;

  list.removeChild(item);
  activities.delete(index);
};

const editItem = (index: number): void => {
  const newTitle: string | null = window.prompt("Digite o novo título");
  if (!newTitle || !newTitle.trim()) {
    alert("Por favor, digite um valor válido!");
    return;
  }

  const date: Date = new Date();

  const datetime: string = date.toLocaleString("pt-BR", TIME_FORMAT);

  activities.set(index, [newTitle, `Editado em ${datetime}`]);

  const item: Element = list.querySelector(`#item${index}`)!;
  item.querySelector("h2")!.textContent = activities.get(index)?.[0] ?? "";
  item.querySelector("p")!.textContent = activities.get(index)?.[1] ?? "";
};

const addItem = (activity: [string, string], index: number): void => {
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
  card.id = `item${index}`;

  list.appendChild(card);
};

// If there are items in activities
const showItems = (): void => {
  if (!activities) {
    return;
  }

  activities.forEach((activity: [string, string], index: number) => {
    addItem(activity, index);
  });
};

showItems();
