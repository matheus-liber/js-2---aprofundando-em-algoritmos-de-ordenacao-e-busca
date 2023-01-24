const listaLivros = require("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita)
        }
    }
    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let iEsquerda = esquerda;
    let iDireita = direita;

    while (iEsquerda <= iDireita) {
        while (array[iEsquerda].preco < pivo.preco) {
            iEsquerda++;
        }
        while (array[iDireita].preco > pivo.preco) {
            iDireita--;
        }

        if (iEsquerda <= iDireita) {
            trocaLugar(array, iEsquerda, iDireita);
            iEsquerda++;
            iDireita--;
        }
    }
    return iEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))