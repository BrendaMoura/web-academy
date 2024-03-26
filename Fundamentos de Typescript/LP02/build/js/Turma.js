class Turma {
    constructor(nome, listaAlunos) {
        this.nome = nome;
        this.listaAlunos = listaAlunos;
        this.getMediaIdades = () => {
            const qtdAlunos = this.listaAlunos.length;
            if (qtdAlunos === 0) {
                return 0;
            }
            const somaIdades = this.listaAlunos.reduce((soma, aluno) => soma + aluno.idade, 0);
            const media = (somaIdades / qtdAlunos).toFixed(2);
            return Number(media);
        };
        this.getMediaAlturas = () => {
            const qtdAlunos = this.listaAlunos.length;
            if (qtdAlunos === 0) {
                return 0;
            }
            const somaAlturas = this.listaAlunos.reduce((soma, aluno) => soma + aluno.altura, 0);
            const media = (somaAlturas / qtdAlunos).toFixed(2);
            return Number(media);
        };
        this.getMediaPesos = () => {
            const qtdAlunos = this.listaAlunos.length;
            if (qtdAlunos === 0) {
                return 0;
            }
            const somaPesos = this.listaAlunos.reduce((soma, aluno) => soma + aluno.peso, 0);
            const media = (somaPesos / qtdAlunos).toFixed(2);
            return Number(media);
        };
        this.id = ++Turma.count;
        this.nome = nome;
        this.listaAlunos = listaAlunos;
    }
    getNumAlunos() {
        return this.listaAlunos.length;
    }
}
Turma.count = 0;
export default Turma;
