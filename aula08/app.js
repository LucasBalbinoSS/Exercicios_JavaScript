let aleatoryNum = Math.floor((Math.random() * 5)) + 1;
let userNum = prompt('Tente acertar o número que estou pensando');

if (userNum == aleatoryNum) {
    alert(`Parabéns, sua resposta está certa, pensei no número: ${aleatoryNum}`);
} else {
    alert(`Poxa, não era o número ${userNum} e sim o número ${aleatoryNum}`);
}