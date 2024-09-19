// SetTimeout
const temporizador = (callback) => {
    setTimeout(() => {
        callback();
        console.log('Tarea finalizada');
    }, 1000);
}

let operacion = () => console.log("Realizando operacion con setTimeout");

// console.log('Inicializando operacion');
// temporizador(operacion);



// SetInterval
let contador = () => {
    let contador = 1;
    console.log("Realizando operacion con setinterval");

    let timer = setInterval(() => {
        console.log(contador++);
        if (contador > 5) {
            clearInterval(timer);
        }
    }, 1000);
    console.log("tarea finalizada");
}

console.log('Inicializando operacion');
contador();