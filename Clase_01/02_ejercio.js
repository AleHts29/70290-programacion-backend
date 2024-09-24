/*
¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba.


*/


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mostrarLista(array) {
    // Logica

    // condicion con elementos
    for (const element of array) {
        console.log(element);
    }

    // Condicion de lista vacia
    if (array.length === 0) {
        // console.log("Lista vacia");
        return 'Lista vacia'
    }

    return `Tamaño de la lista: ${array.length}`

}


// 01_ Prueba lista vacia
console.log(mostrarLista([]));



// 02_ Prueba lista con elementos
console.log(mostrarLista(myArray));