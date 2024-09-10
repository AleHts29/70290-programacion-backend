//ES7
//Uso de exponencial ** como remplazo de la funcion pow de la librería Math (Math.pow(base, exp)))
let valoresBase = [1, 2, 3, 4, 5, 6];
let resExp = valoresBase.map((base, index) => base ** index)
console.log("Modificando valores del arreglo:");
console.log(valoresBase);

console.log("Elevando su valor base por su indice en el arreglo:");
console.log(resExp);


//Array.includes: Corrobora si algún elemento existe en el arreglo - esto retorna un bool
let nombres = ['Juan', 'Camilo', 'Maria', 'Ana', 'Humberto'];
const nombre = "ana"
if (nombres.includes(nombre)) {
    console.log(`${nombre} - si existe el arreglo`);
} else {
    console.log("El nombre no se encuentra en el arreglo.")
}