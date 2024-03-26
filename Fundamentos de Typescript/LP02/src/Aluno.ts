export default class Aluno {
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
