const dividirConPromesa_01 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        // if (divisor === 0) {
        //     reject("No se puede dividir por cero")
        // } else {
        //     let result = dividendo / divisor
        //     resolve(result)//OJO le estoy pasando el valor resultado de esta operación, 
        //     //Tambien podria definir otra funcion y devolver un resultado unico. 
        // }

        setTimeout(() => {
            if (divisor === 0) {
                reject("No se puede dividir por cero.");
            } else {
                resolve(dividendo / divisor);
            }
        }, 2000)
    })
}

const dividirConPromesa_02 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
        } else {
            resolve(dividendo / divisor); //OJO le estoy pasando el valor resultado de esta operación, 
            //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    });
};


const funcionAsincronica = async (a, b) => {
    try {
        // bloque codigo
        console.log('Ejecutando div por func Async()')

        let result_01 = await dividirConPromesa_01(a, b) // <--- esto trabaja de forma sincronica
        console.log(result_01);

        let result_02 = await dividirConPromesa_02(result_01, b)
        console.log(result_02);

    } catch (error) {
        console.log("No se pudo cumplir la promesa, error: ", error);
    }
}

funcionAsincronica(10, 0)
