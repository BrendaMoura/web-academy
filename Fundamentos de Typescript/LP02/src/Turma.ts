import Aluno from "./Aluno";
type averageFunction = () => number;

export default class Turma {
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
