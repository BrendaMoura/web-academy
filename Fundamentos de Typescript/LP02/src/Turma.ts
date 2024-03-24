import Aluno from "./Aluno";

class Turma {
  static count: number = 0;

  constructor(
    public readonly id: number,
    public nome: string,
    public listaAlunos: Aluno[]
  ) {
    this.id = ++Turma.count;
    this.nome = nome;
    this.listaAlunos = listaAlunos;
  }

  public getNumAlunos(): number {
    return this.listaAlunos.length;
  }

  public getMediaIdades(): number {
    const somaIdades: number = this.listaAlunos.reduce(
      (soma: number, aluno: Aluno) => soma + aluno.idade,
      0
    );

    const qtdAlunos: number = this.listaAlunos.length;

    return somaIdades / qtdAlunos;
  }

  public getMediaAlturas(): number {
    const somaAlturas: number = this.listaAlunos.reduce(
      (soma: number, aluno: Aluno) => soma + aluno.altura,
      0
    );

    const qtdAlunos: number = this.listaAlunos.length;

    return somaAlturas / qtdAlunos;
  }

  public getMediaPesos(): number {
    const somaPesos: number = this.listaAlunos.reduce(
      (soma: number, aluno: Aluno) => soma + aluno.peso,
      0
    );

    const qtdAlunos: number = this.listaAlunos.length;

    return somaPesos / qtdAlunos;
  }
}

export default Turma;
