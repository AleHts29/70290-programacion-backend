// String.trim()
let cadena = "   Hola, mundo!   ";
let cadenaLimpia = cadena.trim();

console.log(cadenaLimpia); // "Hola, mundo!"


// Array.flat()
let arreglo = [1, 2, [3, 4], [5, [6, 7]]];
let arregloPlano = arreglo.flat(2);

console.log(arregloPlano); // [1, 2, 3, 4, 5, 6, 7]



// // Función asíncrona que utiliza dynamic import
// async function cargarModulo() {
//     const { default: modulo } = await import('./miModulo.js');

//     modulo.hacerAlgo();  // Llama a una función del módulo importado
// }

// // Solo se carga el módulo cuando se llama la función
// cargarModulo();




// Nullish
let test = undefined;
let nullish = test ?? "Sin Valor"
console.log(nullish);


