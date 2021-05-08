function maior() {
	let numero1 = Number.parseFloat(document.getElementById('numero1').value),
		numero2 = Number.parseInt(document.getElementById('numero2').value),
		numero3 = Number.parseInt(document.getElementById('numero3').value);

	const mesmo = numero1 == numero2 && numero2 == numero3;
	const um = numero1 > numero2 && numero1 > numero3;
	const dois = numero2 > numero3;

	let res = document.getElementById('resultado');

	if (mesmo) {
		res.innerHTML = '<p> Os três números são iguais! </p>';
	} else if (um) {
		res.innerHTML = `<p> O maior número dos três é: ${numero1}</p>`;
	} else if (dois) {
		res.innerHTML = `<p> O maior número dos três é: ${numero2}</p>`;
	} else {
		res.innerHTML = `<p> O maior número dos três é: ${numero3}</p>`;
	}
}

function media() {
	let num1 = Number.parseInt(document.getElementById('numero1').value),
		num2 = Number.parseInt(document.getElementById('numero2').value),
		num3 = Number.parseInt(document.getElementById('numero3').value);

	let media = (num1 + num2 + num3) / 3;

	document.getElementById(
		'resultado'
	).innerText = ` A média dos três números é: ${media}`;
}

function imc() {
	let nome = document.getElementById('nome').value,
		peso = Number.parseFloat(document.getElementById('peso').value),
		altura = Number.parseFloat(document.getElementById('altura').value);

	let imc = peso / Math.pow(altura, 2);

	document.querySelector(
		'#resultado'
	).innerHTML = `<p>${nome} seu IMC é: ${imc}</p>`;
}

function multiplos() {
	let numero = 1,
		somador = 0,
		teste = false;

	while (numero < 10) {
		teste = numero % 3 == 0 || numero % 5 == 0;

		if (teste) {
			console.log(numero);

			somador += numero;
		}

		numero++;
	}

	console.log(somador);
}

//multiplos();

function fibonacci() {
	let a = 1,
		b = 0,
		c = 0,
		pares = [],
		fib = [],
		somador = 0;

	while (c < 50000) {
		c = b + a;
		a = b;
		b = c;

		if (c % 2 == 0) pares.push(c);

		fib.push(c);
	}
	console.log(pares);

	console.log(fib);
}

//fibonacci();

function primo(num) {
	let contador = 0,
		divisor = 1;

	while (divisor <= num) {
		if (num % divisor == 0) contador++;

		divisor++;
	}

	if (contador == 2) return num;
}

function Nprimo() {
	let vetor = [],
		cont = 0,
		x = 0;

	while (cont < 1001) {
		if (primo(x) >= 2 && primo(x)) vetor[cont++] = primo(x);

		x++;
	}

	console.log(vetor);
}

//Nprimo();

function Iprimo() {
	let cont = 0;

	let res = document.getElementById('tabela');

	for (let x = 0; x <= 200; x++) {
		let linha = document.createElement('tr');

		if (primo(x) >= 2 && primo(x)) {
			let coluna1 = document.createElement('td');
			coluna1.innerText = cont++;

			let coluna2 = document.createElement('td');
			coluna2.innerText = x;

			linha.appendChild(coluna1);
			linha.appendChild(coluna2);
			res.appendChild(linha);
		}

		//vetor[cont++] = primo(x);
	}
}

//Iprimo();

function equacao() {
	let a = Number.parseInt(document.getElementById('numA').value),
		b = Number.parseInt(document.getElementById('numB').value),
		c = Number.parseInt(document.getElementById('numC').value);

	let res = document.getElementById('resultado');

	let delta = Math.pow(b, 2) - 4 * a * c;

	if (delta > 0) {
		let x1 = ((-b + Math.sqrt(delta)) / 2) * a;

		let x2 = ((-b - Math.sqrt(delta)) / 2) * a;

		res.innerText = `as raízes da equação são x1 = ${x1} e x2 = ${x2}`;
	} else if (delta == 0) {
		let x1 = ((-b + Math.sqrt(delta)) / 2) * a;

		res.innerText = `as raízes da equação x1 e x2 são iguais a ${x1}`;
	} else {
		res.innerText = `não existe solução no conjunto dos reais.`;
	}
}

function inverte() {
	let vetor = [1, 2, 3, 4, 5, 6],
		invetor = [],
		contador = 0;

	for (let x = vetor.length - 1; x >= 0; x--) {
		invetor[contador++] = vetor[x];
	}

	console.log(vetor);

	console.log(invetor);
}

inverte();

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function expoente() {
	let base = getRandomInt(5) + 1,
		expoente = getRandomInt(3) + 1,
		resultado = 1,
		contador = 0;

	if (expoente == 0) {
		console.log(`${base} elevado à ${expoente} é igual a 1`);
	} else {
		while (contador < expoente) {
			resultado *= base;

			contador++;
		}
		console.log(`${base} elevado à ${expoente} é igual a ${resultado}`);
	}
}

//expoente();

function fatorial(num) {
	let contador = num,
		fatorial = 1;

	while (contador >= 1) {
		fatorial *= contador;
		contador--;
	}
	console.log(fatorial);
}

fatorial(6);
