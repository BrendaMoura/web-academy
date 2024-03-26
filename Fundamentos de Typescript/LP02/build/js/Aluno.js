class Aluno {
    constructor(nomeCompleto, idade, altura, peso) {
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.id = ++Aluno.count;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}
Aluno.count = 0;
export default Aluno;
