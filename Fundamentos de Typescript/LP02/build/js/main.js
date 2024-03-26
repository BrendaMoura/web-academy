import Aluno from "./Aluno.js";
import Turma from "./Turma.js";
const btnAdd = document.getElementById("add");
const list = document.getElementById("students");
// MODAL
const modal = document.getElementById("modal");
const id = document.getElementById("idStudent");
const fullName = document.getElementById("name");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const closeModal = document.getElementsByClassName("close")[0];
const btnSave = document.getElementById("save");
// METRICS
const metrics = document.getElementById("metrics").children;
// CLASS
const turma = new Turma("Educação Física", []);
btnAdd.addEventListener("click", () => {
    modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    clearModal();
});
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
        clearModal();
    }
});
btnSave.addEventListener("click", () => {
    if (!fullName.value || !age.value || !height.value || !weight.value) {
        alert("Preencha todos os campos");
        return;
    }
    if (!id.value) {
        const student = new Aluno(fullName.value, Number(age.value), Number(height.value), Number(weight.value));
        turma.listaAlunos.push(student);
        addStudent(student);
        clearModal();
        loadMetrics();
    }
    else {
        const index = turma.listaAlunos.findIndex((s) => s.id === Number(id.value));
        const student = {
            id: Number(id.value),
            nomeCompleto: fullName.value,
            idade: Number(age.value),
            altura: Number(height.value),
            peso: Number(weight.value),
        };
        turma.listaAlunos[index] = student;
        editStudent(student);
        clearModal();
        loadMetrics();
    }
});
const clearModal = () => {
    id.value = "";
    fullName.value = "";
    age.value = "";
    height.value = "";
    weight.value = "";
};
const loadModal = (idElement) => {
    const student = turma.listaAlunos.find((s) => s.id === idElement);
    id.value = student.id.toString();
    fullName.value = student.nomeCompleto;
    age.value = student.idade.toString();
    height.value = student.altura.toString();
    weight.value = student.peso.toString();
};
const loadMetrics = () => {
    metrics[0].querySelector("h1").textContent = turma.getNumAlunos().toString();
    metrics[1].querySelector("h1").textContent = turma
        .getMediaIdades()
        .toString();
    metrics[2].querySelector("h1").textContent = turma
        .getMediaAlturas()
        .toString();
    metrics[3].querySelector("h1").textContent = turma
        .getMediaPesos()
        .toString();
};
const deleteStudent = (idElement) => {
    const item = document.getElementById(`item${idElement}`);
    list.removeChild(item);
    turma.listaAlunos = turma.listaAlunos.filter((s) => s.id !== idElement);
    loadMetrics();
};
const editStudent = (student) => {
    const item = document.getElementById(`item${student.id}`);
    item.querySelector("h2").textContent = student.nomeCompleto;
    item.querySelector("p").textContent = `${student.idade} anos`;
    modal.style.display = "none";
};
const addStudent = (student) => {
    const card = document.createElement("div");
    card.classList.add("card-student");
    const content = document.createElement("div");
    content.classList.add("content");
    const title = document.createElement("h2");
    title.textContent = student.nomeCompleto;
    const age = document.createElement("p");
    age.textContent = `${student.idade} anos`;
    const action = document.createElement("div");
    action.classList.add("action");
    const btnEdit = document.createElement("input");
    btnEdit.setAttribute("type", "button");
    btnEdit.value = "Editar";
    btnEdit.addEventListener("click", () => {
        loadModal(student.id);
        modal.style.display = "block";
    });
    const btnDelete = document.createElement("input");
    btnDelete.setAttribute("type", "button");
    btnDelete.value = "Apagar";
    btnDelete.addEventListener("click", () => {
        deleteStudent(student.id);
    });
    content.appendChild(title);
    content.appendChild(age);
    action.appendChild(btnEdit);
    action.appendChild(btnDelete);
    card.appendChild(content);
    card.appendChild(action);
    card.id = `item${student.id}`;
    list.appendChild(card);
    modal.style.display = "none";
};
loadMetrics();
