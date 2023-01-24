const { edGalho, edFolha } = require("./arrays");

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let iLista1 = 0;
    let iLista2 = 0;
    let i = 0;

    while(iLista1 < lista1.length && iLista2 < lista2.length) {
        let iProdutoLista1 = lista1[iLista1];
        let iProdutoLista2 = lista2[iLista2];

        if (iProdutoLista1.preco < iProdutoLista2.preco) {
            listaFinal[i] = iProdutoLista1;
            iLista1++;            
        } else {
            listaFinal[i] = iProdutoLista2;
            iLista2++;
        }
        i++;
    }

    while(iLista1 < lista1.length) {
        listaFinal[i] = lista1[iLista1];
        iLista1++;
        i++;
    }

    while(iLista2 < lista2.length) {
        listaFinal[i] = lista2[iLista2];
        iLista2++;
        i++;
    }

    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));