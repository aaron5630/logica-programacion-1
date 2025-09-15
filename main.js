numUno = 5
numDos = 8
numTres = 3

function compararNumeros(numUno, numDos, numTres) {
    let auxiliar = 0
    let contadorVueltas=0
    let numeros = [numUno, numDos, numTres]
    for (let index = 0; contadorVueltas < numeros.length; index++) {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > numeros[i + 1]) {
                auxiliar = numeros[i]
                numeros[i] = numeros[i + 1]
                numeros[i+1] = auxiliar
            } contadorVueltas++
        }
    }return numeros
}