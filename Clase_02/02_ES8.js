//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.
const impuestos = {
    impuesto1: 1,
    impuesto2: 2,
    impuesto3: 3,
    impuesto4: 4,
    impuesto5: 5,
}



//Object.entries: Convierta un objeto en un array de arrays con cada par clave-valor
let impuestosArray = Object.entries(impuestos);
console.log("Array de pares clave-valor:");
console.log(impuestosArray);



//Object.values: Convierta un objeto en un array con sus valores
let impuestosValues = Object.values(impuestos); // [ 2341, 23, 2343, 111, 1234 ]
console.log("Array de valores:");
console.log(impuestosValues);

let impuestosKeys = Object.keys(impuestos);
console.log("Array de keys:");
console.log(impuestosKeys);



// Calcular el total de impuestos en valores
let totalImpuestos = impuestosValues.reduce((total, impuesto) => total + impuesto, 0);
console.log("Total de impuestos:", totalImpuestos);