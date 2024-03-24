class Turma {
    constructor(id, nome, listaAlunos) {
        this.id = id;
        this.nome = nome;
        this.listaAlunos = listaAlunos;
        this.id = ++Turma.count;
        this.nome = nome;
        this.listaAlunos = listaAlunos;
    }
    getNumAlunos() {
        return this.listaAlunos.length;
    }
    getMediaIdades() {
        const somaIdades = this.listaAlunos.reduce((soma, aluno) => soma + aluno.idade, 0);
        const qtdAlunos = this.listaAlunos.length;
        return somaIdades / qtdAlunos;
    }
    getMediaAlturas() {
        const somaAlturas = this.listaAlunos.reduce((soma, aluno) => soma + aluno.altura, 0);
        const qtdAlunos = this.listaAlunos.length;
        return somaAlturas / qtdAlunos;
    }
    getMediaPesos() {
        const somaPesos = this.listaAlunos.reduce((soma, aluno) => soma + aluno.peso, 0);
        const qtdAlunos = this.listaAlunos.length;
        return somaPesos / qtdAlunos;
    }
}
Turma.count = 0;
export default Turma;
