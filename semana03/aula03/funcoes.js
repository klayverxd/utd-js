/*
    Programa javascript que demonstra funções
*/

const painel = document.getElementById('painel');

let texto = '';

let numero1 = 30,
	numero2 = 10;

//função com parâmetros e com retorno
function soma(variavel1, variavel2) {
	return variavel1 + variavel2;
}
//função sem parâmetro e com retorno
function endereco() {
	return 'Av. beira mar 212';
}
//função sem parâmetro e sem retorno
function olaMundo() {
	console.log('Olá mundo!');
}

olaMundo();

texto = endereco();

const resultado = document.createTextNode(texto);
painel.appendChild(resultado);
