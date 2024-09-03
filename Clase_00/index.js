// JavaScript me permite la mutabilidad de las variables
let nombre = "Santiago"
nombre = 12

// console.log(nombre);




// Tipos de datos
// nombre = "Diego"
// console.log(nombre);

// console.log(typeof nombre);



// const obj = { clave: "valor" }
const obj = { nombre: "Andres", apellido: "Sanchez" }
obj.apellido = "Peralta"
// console.log(obj);
// console.log(typeof obj);


const array = [1, 2, 3, 4, 5, "HOLA", { nombre: "Andres", apellido: "Sanchez" }, true]
array[5] = "Adios"
console.log(array);
console.log(typeof array);

// No es mutable y mew genera error
// const nombre_02 = "Pablo"
// nombre_02 = "Juan"

// console.log(nombre_02);
