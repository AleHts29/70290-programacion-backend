//ES9
//Spread and Rest Operator 
//Tomemos un objeto de ejemplo:
const persona = {
    nombre: "Diego",
    apellido: "Sanchez",
    edad: 28,
    saludar() {
        console.log(`Hola , soy ${this.nombre} ${this.apellido}`);
    }
}


// Objects Destructuring 
// Usando el objeto persona como ejemplo:
console.log("\n************** Objects Destructuring: ************ \n");
const printPersona = (persona) => {
    console.log(persona.nombre);
}
printPersona(persona)

// /** Usando una función con object destructing */
const printPersona2 = ({ nombre }) => {
    console.log(nombre);
}
printPersona2(persona)

console.log("const {nombre, edad} = persona;");
const { nombre, apellido } = persona
console.log(nombre, apellido);




// =================================================================
//Y usemos un array de ejemplo:
const nombresOriginal = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const copiaNombresOriginal = [nombresOriginal]
console.log(copiaNombresOriginal[0][1]);


// Usando operados Spread
console.log("\n************** Operador Spread: ************ \n");
console.log("const copiaNombres = [...nombresOriginal];");
const copiaNombres = [...nombresOriginal];
console.log(copiaNombres[1]);


// usando slice 
const copiedSlicedArray = nombresOriginal.slice(0, 5)
console.log(copiedSlicedArray);




