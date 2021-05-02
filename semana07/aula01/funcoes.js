let lista = [];

lista[0] = 'leite';
lista[1] = 'carne';
lista[2] = 'frango';
lista[3] = 'maca';
lista[4] = 'abacate';
lista[5] = 'peixe';

lista.push('uva');
lista.pop();

lista.unshift('aveia');
lista.shift();

lista.splice(2, 3, 'melancia');

console.log(lista);
