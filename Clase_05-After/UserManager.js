const fs = require('fs').promises;
const path = require('path');


class UserManager {
    // TODO - Completar
    constructor() {
        // Inicializar el array de usuarios
        this.filePath = path.join(__dirname, "Users.json")
    }


    // Metodos

    async crearUsuario(newUser) {
        // Implementar el código para crear un usuario
        let usuarios = []
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            usuarios = JSON.parse(data);
        } catch (error) {
            // Si el archivo no existe, inicializamos usuarios como un arreglo vacío
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }

        // Agregar el usuario al array
        usuarios.push(newUser)

        // escribimos el archivo
        await fs.writeFile(this.filePath, JSON.stringify(usuarios, null, 2), 'utf8')

        console.log("Usuario creado de forma exitosa!!");

    }


    async consultarUsuarios() {
        // Implementar el código para consultar todos los usuarios
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            const usuarios = JSON.parse(data);
            return usuarios
        } catch (error) {
            console.error(`Error al consultar usuarios: ${error}`);
            return [];
        }
    }
}



module.exports = UserManager // 👈 No olvidar exportar