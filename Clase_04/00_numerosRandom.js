/*
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.

Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

*/
// 01_ Necesito  math.random ---> Generar nummero ala
// 02_ for  para generar 10000 iteraciones
/* usar Promesas
salida esperada::
        let obj = {
            1: 2
            3: 1,
            2: 350
        }

        obj[1] = ++ 
*/

const generarNumerosRandom = () => {
    return new Promise((resolve, reject) => {
        try {
            const numeros = [];
            for (let i = 0; i < 20; i++) {
                numeros.push(Math.floor(Math.random() * 20) + 1);
            }
            resolve(numeros);
        } catch (error) {
            reject(error)
        }
    })
}

// const numeros = [1, 1, 3, 4, 5, 6, 7, 8, 9, ....]
const contarFrecuencias = (numeros) => {
    return new Promise((resolve, reject) => {
        try {
            const frecuencias = {}

            numeros.forEach(numero => {
                if (!frecuencias[numero]) {
                    frecuencias[numero] = 1;
                } else {
                    frecuencias[numero]++;
                }
            })

            resolve(frecuencias);

        } catch (error) {
            reject(error)
        }
    })
}



// Creamos  funcioin principal
const main = async () => {
    try {
        const numeros = await generarNumerosRandom();

        const frecuencias = await contarFrecuencias(numeros);

        console.log('frecuencias de los numeros', frecuencias);

    } catch (error) {
        console.error("Ocurrio un error: ", error);
    }
}


main();