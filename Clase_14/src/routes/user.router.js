import { Router } from "express";
import { userModel } from '../models/user.model.js'


const router = Router()


// Endpoints

// GET
router.get('/', async (req, res) => {
    try {
        let users = await userModel.find()
        console.log(users);
        res.send({ result: "success", payload: users })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error al obtener los usuarios" })
    }
})


// POST
router.post('/', async (req, res) => {
    try {

        let { first_name, last_name, email, age } = req.body;

        // validaciones
        if (!first_name || !last_name) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' })
        }

        let user = await userModel.create({ first_name, last_name, email, age })

        res.status(201).send(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error al crear usuario" })
    }
})



// PUT
router.put('/:id', async (req, res) => {
    try {
        let userUpdate = req.body
        let user = await userModel.updateOne({ _id: req.params.id }, userUpdate)
        res.status(202).send(user);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error al actualizar el usuario" })
    }
})


// DELETE

router.delete('/:id', async (req, res) => {
    try {
        let user = await userModel.deleteOne({ _id: req.params.id })
        res.status(202).send(user);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error al eliminar el usuario" })
    }
})




export default router




