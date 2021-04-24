class Conta {
	constructor() {
		this.saldo = 0;
	}

	saque(valor) {
		if (valor > this.saldo) console.log('Saldo insuficiente!');
		else this.saldo -= valor;
	}

	deposito(valor) {
		this.saldo += valor;
	}
}

class ContaPoupanca extends Conta {
	rendimento(taxa) {
		this.saldo += this.saldo * (taxa / 100);
	}
}

class ContaCorrente extends Conta {
	manutencao(taxa) {
		this.saldo -= this.saldo * (taxa / 100);
	}
}

let c1 = new ContaPoupanca();

c1.deposito(1000);

c1.rendimento(10);

c1.saque(300);

console.log(c1);
