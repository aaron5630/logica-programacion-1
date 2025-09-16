

/*Usar continue en el de comparacion de numeros iguales*/
function compararNumerosIguales(numeros) {
    listaDeIguales=[];
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i]==numeros[j] && i!=j && !listaDeIguales.includes(numeros[i])) {
                listaDeIguales.push(numeros[i]) 
            }   
        }
    }return listaDeIguales
}


function ordenarNumeros(listaNumeros) {
    let auxiliar = 0;
    for (i=0; i < listaNumeros.length; i++) {
        j = 1;
            for (let j = 0; j < listaNumeros.length - 1; j++) {
                if (listaNumeros[j] < listaNumeros[j+1]) {
                    auxiliar = listaNumeros[j];
                    listaNumeros[j] = listaNumeros[j+1];
                    listaNumeros[j+1] = auxiliar;
                }
            }j++;
    }return listaNumeros;
} 

numeros=[5,7,9,2,4,6,5]
lista=ordenarNumeros(numeros)
console.log(lista)
listaDeIguales=compararNumerosIguales(lista)
console.log(listaDeIguales)