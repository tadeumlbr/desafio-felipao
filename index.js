// Variáveis do herói
let nomeDoHeroi = "Link";        // Altere o nome aqui
let xpDoHeroi = 8500;            // Altere a quantidade de XP aqui para testar

let nivel = "";

// Estrutura de decisão para determinar o nível do herói
if (xpDoHeroi <= 1000) {
    nivel = "Ferro";
}
else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivel = "Bronze";
}
else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivel = "Prata";
}
else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    nivel = "Ouro";
}
else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivel = "Platina Diamante";
}
else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivel = "Ascendente";
}
else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivel = "Imortal";
}
else if (xpDoHeroi >= 10001) {
    nivel = "Radiante";
}

// Mensagem final (exatamente no formato pedido)
console.log(`O herói de nome **${nomeDoHeroi}** está no nível de **${nivel}**`);