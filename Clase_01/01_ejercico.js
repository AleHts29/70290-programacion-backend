
let i = 10;
const testScope = function () {
    let i = 0;
    console.log(i); // 0

    if (true) {
        const variable = 12
        console.log(variable); // 12
    }
    // console.log(variable); // da error
    return i + 5
}

let test = testScope()
console.log(test); // 5



/*=============================================
=                   Constantes                =
=============================================*/

let obj1 = {
    name: "Rodri",
    edad: 25,
    cursos: {
        c1: "backend"
    }
}
console.log(obj1);


// let obj2 = obj1 // -- Copia por valor
let obj2 = { ...obj1 } // copia por referencia y tiene otra posicion de memoria
console.log(obj2);

obj2.name = "Lucas"
obj2.pais = "Arg"

console.log("Obj2");
console.log(obj2);


console.log("Obj1");
console.log(obj1);


/*=============================================
=                   Funciones                 =
=============================================*/

const suma = (a, b) => {
    let result;
    result = a + b;
    return result
}

console.log(suma(2, 5));


// Posible refactor
const sumaRefactor = (a, b) => a + b;

// Template String
console.log(`El resultado  de la suma es: ${sumaRefactor(2, 5)}`);





