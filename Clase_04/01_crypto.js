const crypto = require('crypto');


class UsersManager {
    static usuarios = [];

    // Método para hashear la contraseña
    static hashPassword(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }

    // Metodos
    // 00_ crearUsuario
    static crearUsuario({ nombre, apellido, nombreUsuario, contraseña }) {
        const hashPassword = this.hashPassword(contraseña);
        const nuevoUsuario = {
            nombre,
            apellido,
            nombreUsuario,
            contrasenia: hashPassword,
        }
        this.usuarios.push(nuevoUsuario);
        console.log(`Usuario ${nombreUsuario} creado exitosamente.`);
    }

    // 01_ mostrarUsuarios
    static mostrarUsuarios() {
        console.log("Usuarios almacenados:", this.usuarios);
    }

    // 02_ validarUsuario
    static validarUsuario(nombreUsuario, contraseña) {
        const usuario = this.usuarios.find(user => user.nombreUsuario === nombreUsuario);

        if (!usuario) {
            console.log("El usuario no existe.");
            return false;
        }


        const hashContraseña = this.hashPassword(contraseña);


        if (usuario.contraseña !== hashContraseña) {
            console.log("Contraseña incorrecta.");
            return false;
        } else {
            console.log("Logueado");

        }
    }

}

UsersManager.crearUsuario({
    nombre: "Luis",
    apellido: "Munar",
    nombreUsuario: "lmunar",
    contraseña: "password123"
})

UsersManager.crearUsuario({
    nombre: "Ana",
    apellido: "Perez",
    nombreUsuario: "aperez",
    contraseña: "mySecretPassword"
});


// Mostrar usuarios
UsersManager.mostrarUsuarios();


// Validamos usuario (correcto)
UsersManager.validarUsuario("lmunar", "password123")

// Validar usuario (contraseña incorrecta)
UsersManager.validarUsuario("lmunar", "wrongPassword");

// Validar usuario (usuario no existente)
UsersManager.validarUsuario("nonexistent", "password123");
