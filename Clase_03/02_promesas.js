const dividirConPromesa = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);
        if (divisor === 0) {
            reject("No se puede dividir por cero")
        } else {
            let result = dividendo / divisor
            resolve(result)//OJO le estoy pasando el valor resultado de esta operación, 
            //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    })
}
console.log("Dividiendo usando Promesas, Resultado:");
// console.log(dividirConPromesa(5, 2));


// Manejamos el error
dividirConPromesa(5, 0)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));