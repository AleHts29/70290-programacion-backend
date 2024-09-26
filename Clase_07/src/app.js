import express from 'express';

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = 9090;



// Endpoints

// Telemetria routes
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
})


// simulamos una `DB` de usuarios
let users = [
    { id: 1, first_name: 'John', last_name: "Doe", email: 'johndoe@example.com' },
    { id: 2, first_name: 'Jane', last_name: "Smith", email: 'janesmith@example.com' },
    { id: 3, first_name: 'Alice', last_name: "Johnson", email: 'alicejohnson@example.com' }
];


// Listar
app.get("/api/users", (req, res) => {
    res.send(users);
})

// Crear
app.post("/api/users", (req, res) => {
    // console.log(req.body);
    let user = req.body

    // asignar un id al user 
    const numRamdom = Math.floor(Math.random() * 200 + 1);
    user.id = numRamdom + users.length

    if (!user.email) {
        return res.status(403).send({ message: "valores incompletos para el registro" })
    }

    users.push(user);
    res.send({ status: "success", msg: 'Usuario Creado!' })

})

// Actualizar
app.put("/api/users/:userId", (req, res) => {
    let userId = req.params.userId
    let userUpdate = req.body


    const userPosition = users.findIndex(u => u.id === parseInt(userId));

    if (userPosition < 0) {
        return res.status(402).send({ status: "info", error: "Usuario no encontrado" });
    }
    users[userPosition] = userUpdate

    res.send({ status: "success", msg: 'Usuario actualizado!' });

})

// Eliminar
app.delete("/api/users/:userId", (req, res) => {
    let userId = parseInt(req.params.userId)


    const usersSize = users.length

    // buscamos el registro por el id
    const userPosition = users.findIndex(u => u.id === userId);
    if (userPosition < 0) {
        return res.status(402).send({ status: "info", error: "Usuario no encontrado" });
    }


    // Eliminamos el registro por posicion
    users.splice(userPosition, 1);
    if (users.length === usersSize) {
        return res.status(500).send({ status: "success", msg: 'Usuario no se pudo eliminar!' });
    }

    res.send({ status: "Success", message: "Usuario Eliminado." }); //Si no se indica retorna status HTTP 200 OK.
})

// la escucha del server
app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});