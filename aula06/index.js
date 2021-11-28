// Declarando variáveis constantes
const nome = 'Lucas';
const sobrenome = 'Balbino';
const idade = 18;
const peso = 65;
const altura = 1.80;

// Declarando variáveis que sofrerão alteração
let imc;
imc = peso / (altura ** 2);

// Saída
console.log(`${nome} ${sobrenome} tem ${idade} anos de idade e pesa ${peso}Kg`);
console.log(`O IMC de ${nome} ${sobrenome} é ${imc}`);
