const UserManager = require('./UserManager.js')

// creamos instacia de la clase
const userManager = new UserManager()

const nuevoUsuario = {
    nombre: "Pablo",
    apellido: "Janko",
    nombreUsuario: "jgarcia",
    contrasenia: "password123",
    direccion: "Calle Falsa 123",
    telefono: "666666666",
    edad: 30,
    ciudad: "Buenos Aires",
}


async function main() {
    // Llama al metodo de la clase para crear el usuario
    await userManager.crearUsuario(nuevoUsuario)

    // Consulta usuarios
    const usuarios = await userManager.consultarUsuarios()
    console.log("Usuarios encontrados", usuarios);
}

async function productos() {
    // Llama al metodo de la clase para crear el usuario
    await userManager.crearUsuario(nuevoUsuario)


    // Consulta usuarios
    const usuarios = await userManager.consultarUsuarios()
    console.log("Usuarios encontrados", usuarios);

}


main()
productos() 