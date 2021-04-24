let aluno = {
	nome: 'Anita',
	idade: 22,
	curso: 'Engenharia Civil',

	get getNome() {
		return this.nome;
	},

	set mudarNome(novoNome) {
		this.nome = novoNome;
	},

	get getIdade() {
		return this.idade;
	},

	set mudarIdade(novaIdade) {
		this.idade = novaIdade;
	},
};

console.log(aluno.getNome);
console.log(aluno.getIdade);

aluno.mudarNome = 'Lara';
aluno.mudarIdade = 25;

console.log(aluno.getNome);
console.log(aluno.getIdade);
