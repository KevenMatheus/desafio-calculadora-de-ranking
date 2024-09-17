
function calculateVictoriesAndDefeats(victory, defeat) {
    let result = victory - defeat;
    return result;
}

function compareRanking(result) {  
    if (result <=10){
        return("Ferro");
    } else if (result >=11 && result <=20){
        return("Bronze")
    } else if (result >=21 && result <=50){
        return("Prata")
    } else if (result >=51 && result <=80){
        return("Ouro")
    } else if (result >=81 && result <=90){
        return("Diamante")
    } else if (result >=91 && result <=100){
        return("Lendário")
    } else {
        return("Imortal")
    }
        
    
}
function processResults(victory, defeat) {
    // Calcula as vitórias e derrotas
    let result = calculateVictoriesAndDefeats(victory, defeat);

    // Determina o ranking com base no resultado
    let ranking = compareRanking(result);

    // Exibe uma mensagem na tela com o resultado e o ranking
    console.log(`O herói tem de saldo de: ${result}. Está no nível de: ${ranking}`);
}

// Chama a função principal
processResults(25, 5);