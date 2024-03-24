class Aluno {
  static count: number = 0;

  constructor(
    public readonly id: number,
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

export default Aluno;
