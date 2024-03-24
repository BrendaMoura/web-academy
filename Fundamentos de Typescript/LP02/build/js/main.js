import Aluno from "./Aluno";
import Turma from "./Turma";
const btnAdd = document.getElementById("add");
const list = document.getElementById("students");
const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];
const btnSave = document.getElementById("save");
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
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    if (!name || !age || !height || !weight) {
        alert("Preencha todos os campos");
        return;
    }
    const index = turma.getNumAlunos() + 1;
    const student = new Aluno(index, name, age, height, weight);
    turma.listaAlunos.push(student);
    addStudent(student, index);
});
const addStudent = (student, index) => {
    const card = document.createElement("div");
    card.classList.add("card-student");
    const content = document.createElement("div");
    content.classList.add("content");
    const title = document.createElement("h2");
    title.textContent = student.nomeCompleto;
    const age = document.createElement("p");
    age.textContent = student.idade.toString();
    const action = document.createElement("div");
    action.classList.add("action");
    const btnEdit = document.createElement("input");
    btnEdit.setAttribute("type", "button");
    btnEdit.value = "Editar";
    btnEdit.addEventListener("click", () => {
        //
    });
    const btnDelete = document.createElement("input");
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
