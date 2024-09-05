class Auto {
    constructor(color, marca) {
        this.color = color;
        this.marca = marca
    }


    // Definicion de Metodos
    frenar() {
        // Logica mas detallada
        return `Se frena el auto`
    }

    acelerar() {
        // Logica mas detallada
        return `Se acelera el auto de marca: ${this.marca} y color: ${this.color} `
    }
}






// Instanciamos la clase Auto
const newAuto01 = new Auto('Negro', "Peugeot")
console.log(newAuto01);


console.log(newAuto01.acelerar());


