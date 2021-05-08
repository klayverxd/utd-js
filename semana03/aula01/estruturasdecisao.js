/*
    Programa javascript que demonstra estruturas de decisão
*/

//criando variáveis var, let , const

let letra = 'Javascript';

let numero1 = 10,
	numero2 = 25;
// + soma - subtração  * multiplicação  / divisão
/*
console.log(letra);

console.log(numero1-numero2);

console.log(numero1*numero2);

console.log(numero1/numero2);


console.log(numero1>numero2);

console.log(numero1<=numero2);

console.log(numero1==numero2);

console.log(numero1!=numero2);


console.log(numero1==letra);

console.log(numero1===letra);

letra = 16;

if(numero1===letra)
    console.log('eles são do mesmo tipo');
else if(numero1==letra)
    console.log('Eles são iguais');    
else
    console.log('Os dois não são do mesmo tipo e nem iguais');
 */

let opcao = 1;
switch (opcao) {
	case 1:
		console.log('ensino médio');
		break;

	case 2:
		console.log('graduação');
		break;

	case 3:
		console.log('mestrado');
		break;

	case 4:
		console.log('doutorado');
		break;

	default:
		console.log('escolaridade não definida.');
}
