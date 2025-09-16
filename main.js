

/*Esta función obtiene los números por pregunta al usuario para convertirlos en una lista*/
function obtenerLista() {
    const listaNumeros = [];
    let numeroDeIntentos = 3;
    for (let index = 0; index < numeroDeIntentos; index++) {
        let resultado = prompt("Introduzca un número: ");
        let numero = parseInt(resultado);
        listaNumeros.push(numero);
    } return listaNumeros;
}

/*Esta función ordena una lista de números de mayor a menor*/
function ordenarNumerosDeMayorAMenor(listaNumeros) {
    let auxiliar = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        for (let j = 0; j < listaNumeros.length - 1; j++) {
            if (listaNumeros[j] < listaNumeros[j + 1]) {
                auxiliar = listaNumeros[j];
                listaNumeros[j] = listaNumeros[j + 1];
                listaNumeros[j + 1] = auxiliar;
            }
        }
    } return listaNumeros;
}

/*Esta función ordena los numeros de menor a mayor a partir de una lista ordenada de mayor a menor.*/
function ordenarNumnerosDeMenorAMayor(listaNumeros) {
    const listaNumerosMenorMayor = []
    for (let index = listaNumeros.length - 1; index >= 0; index--) {
        listaNumerosMenorMayor.push(listaNumeros[index])
    } return listaNumerosMenorMayor
}

/*Esta función se especializa en detectar duplicados en una lista de números*/
function compararNumerosIguales(numeros) {
    let listaDeIguales = [];
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] == numeros[j] && i != j && !listaDeIguales.includes(numeros[i])) {
                listaDeIguales.push(numeros[i])
            }
        }
    } return listaDeIguales
}

/*Esta función imprime una lista con un estilo mas amigable*/
function imprimirLista(lista) {
    let resultado = "";
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];
        if (i < lista.length - 1) {
            resultado += ", ";
        }
    }return resultado;
}


function ordenarNumeros() {
    let listaNumeros=obtenerLista();
    let listaOrdenadaMm=ordenarNumerosDeMayorAMenor(listaNumeros);
    let listaOrdenadamM=ordenarNumnerosDeMenorAMayor(listaOrdenadaMm)
    console.log(`La lista ordenada de mayor a menor es: ${imprimirLista(listaOrdenadaMm)}`);
    console.log(`La lista ordenada de menor a mayor es: ${imprimirLista(listaOrdenadamM)}`);
    let listaRepetidos=compararNumerosIguales(listaOrdenadaMm);
    if (listaRepetidos.length>0) {
        console.log(`Los números repetidos son: ${imprimirLista(listaRepetidos)}`);
    } else {
        console.log("No hay números repetidos.")
    }
}

ordenarNumeros();



/*Estos comandos son de pruebas de las funciones
numeros = [5, 7, 9, 2, 4, 6, 5]
lista = ordenarNumerosDeMayorAMenor(numeros)
console.log(lista)
lista2 = ordenarNumnerosDeMenorAMayor(lista)
console.log(lista2)
listaDeIguales = compararNumerosIguales(lista)

console.log(listaDeIguales)
imprimirLista(lista)
lista3 = obtenerLista();
console.log(lista3)
//alert("Tu lista es: " + lista3.join(", "));
*/