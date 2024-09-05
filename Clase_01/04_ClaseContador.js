class Contador {
    static cuentaGlobal = 0
    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }

    // Metodos
    obtenerResponsable() {
        return this.responsable;
    }
    obtenerCuentaIndividual() {
        return this.cuentaIndividual;
    }
    obtenerCuentaGlobal() {
        return Contador.cuentaGlobal;
    }
    sumarSaldos() {
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }
}

const user01 = new Contador("Juan")
const user02 = new Contador("Seba")

user01.sumarSaldos()
user01.sumarSaldos()

user02.sumarSaldos()


console.log("juan: ", user01.obtenerCuentaIndividual());
console.log("Seba: ", user02.obtenerCuentaIndividual());

console.log("Cuenta Global: ", user01.obtenerCuentaGlobal());
console.log("Cuenta Global: ", user02.obtenerCuentaGlobal());
