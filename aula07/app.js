let userAge = parseInt(prompt('Qual é a sua idade?'))

if (userAge >= 0 && userAge <= 5) {
    console.log('Passe grátis');
} else if (userAge >= 5 && userAge <= 10) {
    console.log('Passe de criança')
} else if (userAge >= 10 && userAge < 65) {
    console.log('Passe de adulto');
} else if (userAge >= 65) {
    console.log('Passe de sênior, tem R$10,00 de desconto');
}