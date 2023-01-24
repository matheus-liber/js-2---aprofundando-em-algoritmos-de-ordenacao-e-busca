const listaLivros = require("./array");

function mergeSort(array) {
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio)); 
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2)
    }

    return array;
}

function ordena(parte1, parte2) {
    let iParte1 = 0;
    let iParte2 = 0;
    const resultado = [];

    while (iParte1 < parte1.length && iParte2 < parte2.length) {
        let iProdutoParte1 = parte1[iParte1];
        let iProdutoParte2 = parte2[iParte2];

        if (iProdutoParte1.preco < iProdutoParte2.preco) {
            resultado.push(iProdutoParte1);
            iParte1++;
        } else {
            resultado.push(iProdutoParte2);
            iParte2++;
        }
    }

    return resultado.concat(iParte1 < parte1.length 
        ? parte1.slice(iParte1) 
        : parte2.slice(iParte2))
}

console.log(mergeSort(listaLivros))