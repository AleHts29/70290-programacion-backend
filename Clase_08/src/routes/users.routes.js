import { Router } from "express"


const router = Router()


// Endpoints

let users = [
    { id: 1, first_name: 'John', last_name: "Doe", email: 'johndoe@example.com' },
    { id: 2, first_name: 'Jane', last_name: "Smith", email: 'janesmith@example.com' },
    { id: 3, first_name: 'Alice', last_name: "Johnson", email: 'alicejohnson@example.com' }
];

// Endpoints
router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    let user = req.body
    user.id = Math.floor(Math.random() * 200 + 1);

    if (!user.first_name || !user.last_name) {
        return res.status(403).send({ message: "Valores incompletos para el registro" })
    } else {
        users.push(user);
        res.send({ status: "success", msg: 'Usuario Creado!' })
    }
})


// PUT
router.put('/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    let userUpdate = req.body

    console.log(`Buscando usuario a modificar por id: ${userId}`);
    const userPosition = users.findIndex(u => u.id === userId);
    if (userPosition < 0) {
        return res.status(402).send({ status: "info", error: "Usuario no encontrado" });
    }

    console.log("Usario encontrado para modificar:");
    console.log(users[userPosition]);

    userUpdate.id = users[userPosition].id
    users[userPosition] = userUpdate

    console.log("Usuarios actuales");
    console.log(users);


    res.send({ status: "success", msg: 'Usuario Actualizado!', payload: users[userPosition] })
})



// DELETE
router.delete('/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)

    console.log(`Buscando usuario a eliminar por id: ${userId}`);
    const userPosition = users.findIndex(u => u.id === userId);
    if (userPosition < 0) {
        return res.status(402).send({ status: "info", error: "Usuario no encontrado" });
    }

    console.log("Usario encontrado para eliminar:");
    console.log(users[userPosition]);

    users.splice(userPosition, 1);


    res.send({ status: "success", msg: 'Usuario Eliminado!' })
})





//exportamos router
export default router;