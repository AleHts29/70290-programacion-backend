//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];

let nuevosValores = valoresOriginales.map(x => x * 10);
// console.log(nuevosValores);


// declaramos el callback afuera
const miCallback = (valor) => {
    if (valor % 2 === 0) {
        return valor;
    } else {
        return 'No es un numero par'
    }
}
let nuevosValores2 = valoresOriginales.map(miCallback);
// console.log(nuevosValores2);



//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];



// console.log("callbackTest");
const callbackTest = x => x * 2;
// console.log(arregloDePrueba.map(callbackTest));


const miFuncionMap = (array, callback) => {
    let nuevoArreglo = [];
    for (let i = 0; i < array.length; i++) {
        let nuevoValor = callback(array[i])
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}


//Ejecutemos las dos versiones:
let nuevoArregloPropio = miFuncionMap(arregloDePrueba, callbackTest)
// console.log(nuevoArregloPropio);



//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.miMapTest = function (callback) {
    let nuevoArreglo = [];
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
// console.log(arregloDePrueba.miMapTest(x => x * 10));




/*=============================================
=                  Calculadora                =
=============================================*/

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;


const realizarOperaciones = (num1, num2, callback) => {
    console.log(`Voy a realizar una operacion, de tipo: ${callback}`);
    let res = callback(num1, num2);
    console.log(`El resultado de la operacion realizada es: ${res}`);
}

// realizarOperaciones(5, 3, sumar);
// realizarOperaciones(5, 3, restar);
// realizarOperaciones(5, 3, multiplicar);
// realizarOperaciones(5, 2, dividir);




/*=============================================
=                   callbackHell             =
=============================================*/

function uno(callback) {
    setTimeout(function () {
        console.log("Uno");
        callback();
    }, 1000);
}

function dos(callback) {
    setTimeout(function () {
        console.log("Dos");
        callback();
    }, 1000);
}

function tres(callback) {
    setTimeout(function () {
        console.log("Tres");
        callback();
    }, 1000);
}

// Usando las tres funciones anterioes 
uno(function () {
    dos(function () {
        tres(function () {
            console.log("Fin del callback Hell");
        })
    })
})