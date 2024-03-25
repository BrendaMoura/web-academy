type averageFunction = () => number;

class Aluno {
  static count: number = 0;
  public readonly id: number;
  constructor(
    public nomeCompleto: string,
    public idade: number,
    public altura: number,
    public peso: number
  ) {
    this.id = ++Aluno.count;
    this.nomeCompleto = nomeCompleto;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
}

class Turma {
  static count: number = 0;
  public readonly id: number;

  constructor(public nome: string, public listaAlunos: Aluno[]) {
    this.id = ++Turma.count;
    this.nome = nome;
    this.listaAlunos = listaAlunos;
  }

  public getNumAlunos(): number {
    return this.listaAlunos.length;
  }

  public getMediaIdades: averageFunction = () => {
    const qtdAlunos: number = this.listaAlunos.length;

    if (qtdAlunos === 0) {
      return 0;
    }

    const somaIdades: number = this.listaAlunos.reduce(
      (soma: number, aluno: Aluno) => soma + aluno.idade,
      0
    );

    const media = (somaIdades / qtdAlunos).toFixed(2);

    return Number(media);
  };

  public getMediaAlturas: averageFunction = () => {
    const qtdAlunos: number = this.listaAlunos.length;

    if (qtdAlunos === 0) {
      return 0;
    }

    const somaAlturas: number = this.listaAlunos.reduce(
      (soma: number, aluno: Aluno) => soma + aluno.altura,
      0
    );

    const media = (somaAlturas / qtdAlunos).toFixed(2);

    return Number(media);
  };

  public getMediaPesos: averageFunction = () => {
    const qtdAlunos: number = this.listaAlunos.length;

    if (qtdAlunos === 0) {
      return 0;
    }

    const somaPesos: number = this.listaAlunos.reduce(
      (soma: number, aluno: Aluno) => soma + aluno.peso,
      0
    );

    const media = (somaPesos / qtdAlunos).toFixed(2);

    return Number(media);
  };
}

const btnAdd: HTMLElement = document.getElementById("add")!;
const list: HTMLElement = document.getElementById("students")!;

// MODAL
const modal: HTMLElement = document.getElementById("modal")!;
const id: HTMLInputElement = document.getElementById(
  "idStudent"
)! as HTMLInputElement;
const fullName: HTMLInputElement = document.getElementById(
  "name"
)! as HTMLInputElement;
const age: HTMLInputElement = document.getElementById(
  "age"
)! as HTMLInputElement;
const height: HTMLInputElement = document.getElementById(
  "height"
)! as HTMLInputElement;
const weight: HTMLInputElement = document.getElementById(
  "weight"
)! as HTMLInputElement;
const closeModal = document.getElementsByClassName("close")[0]!;
const btnSave = document.getElementById("save")!;

// METRICS
const metrics: HTMLCollection = document.getElementById("metrics")!.children;

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
    const student: Aluno = new Aluno(
      fullName.value,
      Number(age.value),
      Number(height.value),
      Number(weight.value)
    );

    turma.listaAlunos.push(student);
    addStudent(student);
    clearModal();
    loadMetrics();
  } else {
    const index: number = turma.listaAlunos.findIndex(
      (s) => s.id === Number(id.value)
    );

    const student: Aluno = {
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

const loadModal = (idElement: number) => {
  const student: Aluno = turma.listaAlunos.find((s) => s.id === idElement)!;

  id.value = student.id.toString();
  fullName.value = student.nomeCompleto;
  age.value = student.idade.toString();
  height.value = student.altura.toString();
  weight.value = student.peso.toString();
};

const loadMetrics = () => {
  metrics[0].querySelector("h1")!.textContent = turma.getNumAlunos().toString();
  metrics[1].querySelector("h1")!.textContent = turma
    .getMediaIdades()
    .toString();
  metrics[2].querySelector("h1")!.textContent = turma
    .getMediaAlturas()
    .toString();
  metrics[3].querySelector("h1")!.textContent = turma
    .getMediaPesos()
    .toString();
};

const deleteStudent = (idElement: number): void => {
  const item: HTMLElement = document.getElementById(`item${idElement}`)!;
  list.removeChild(item);
  turma.listaAlunos = turma.listaAlunos.filter((s) => s.id !== idElement);
  loadMetrics();
};

const editStudent = (student: Aluno): void => {
  const item: HTMLElement = document.getElementById(`item${student.id}`)!;
  item.querySelector("h2")!.textContent = student.nomeCompleto;
  item.querySelector("p")!.textContent = `${student.idade} anos`;
  modal.style.display = "none";
};

const addStudent = (student: Aluno): void => {
  const card: HTMLDivElement = document.createElement("div");
  card.classList.add("card-student");

  const content: HTMLDivElement = document.createElement("div");
  content.classList.add("content");

  const title: HTMLHeadingElement = document.createElement("h2");
  title.textContent = student.nomeCompleto;

  const age: HTMLParagraphElement = document.createElement("p");
  age.textContent = `${student.idade} anos`;

  const action: HTMLDivElement = document.createElement("div");
  action.classList.add("action");

  const btnEdit: HTMLInputElement = document.createElement("input");
  btnEdit.setAttribute("type", "button");
  btnEdit.value = "Editar";
  btnEdit.addEventListener("click", () => {
    loadModal(student.id);
    modal.style.display = "block";
  });

  const btnDelete: HTMLInputElement = document.createElement("input");
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
