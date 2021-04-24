function Person() {
	this.nome = "";
	this.idade = "";
}

let p1 = new Person();

p1.nome = "Klayver";
p1.nome = 19;

console.log(p1.nome);
console.log(p1.idade);

let aluno = {
    nome: 'Anita',
    idade: 22,
    curso: 'Engenharia Civil'
}

aluno.turno = 'manhã'

console.log(aluno.nome)
console.log(aluno.idade)
console.log(aluno.curso)

// desestruturação

let { nome, idade } = aluno;

console.log(nome)
console.log(idade)
console.log(aluno.turno)