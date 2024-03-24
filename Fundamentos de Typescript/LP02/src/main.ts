import Aluno from "./Aluno";
import Turma from "./Turma";
const btnAdd: HTMLElement = document.getElementById("add")!;
const list: HTMLElement = document.getElementById("students")!;
const modal: HTMLElement = document.getElementById("modal")!;
const closeModal = document.getElementsByClassName("close")[0]!;
const btnSave = document.getElementById("save")!;

const turma = new Turma(1, "Educação Física", []);

btnAdd.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

btnSave.addEventListener("click", () => {
  const name: string | null = (
    document.getElementById("name")! as HTMLInputElement
  ).value;
  const age: number | null = Number(
    (document.getElementById("age")! as HTMLInputElement).value
  );
  const height: number | null = Number(
    (document.getElementById("height")! as HTMLInputElement).value
  );
  const weight: number | null = Number(
    (document.getElementById("weight")! as HTMLInputElement).value
  );

  if (!name || !age || !height || !weight) {
    alert("Preencha todos os campos");
    return;
  }
  const index: number = turma.getNumAlunos() + 1;
  const student: Aluno = new Aluno(index, name, age, height, weight);

  turma.listaAlunos.push(student);

  addStudent(student, index);
});

const addStudent = (student: Aluno, index: number): void => {
  const card: HTMLDivElement = document.createElement("div");
  card.classList.add("card-student");

  const content: HTMLDivElement = document.createElement("div");
  content.classList.add("content");

  const title: HTMLHeadingElement = document.createElement("h2");
  title.textContent = student.nomeCompleto;

  const age: HTMLParagraphElement = document.createElement("p");
  age.textContent = student.idade.toString();

  const action: HTMLDivElement = document.createElement("div");
  action.classList.add("action");

  const btnEdit: HTMLInputElement = document.createElement("input");
  btnEdit.setAttribute("type", "button");
  btnEdit.value = "Editar";
  btnEdit.addEventListener("click", () => {
    //
  });

  const btnDelete: HTMLInputElement = document.createElement("input");
  btnDelete.setAttribute("type", "button");
  btnDelete.value = "Apagar";
  btnDelete.addEventListener("click", () => {
    //
  });

  content.appendChild(title);
  content.appendChild(age);

  action.appendChild(btnEdit);
  action.appendChild(btnDelete);

  card.appendChild(content);
  card.appendChild(action);
  card.id = `item${index}`;

  list.appendChild(card);
};
