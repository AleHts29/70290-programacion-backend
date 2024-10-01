import { Router } from "express"
import { uploader } from "../utils.js"

const router = Router()

let pets = []


/*=============================================
=                   Section_02                =
=============================================*/
// middleware a nivel de router
router.use(function (request, response, next) {
    console.log("Mi propio middleware a nivel de ROUTER!!.");
    console.log("Time: " + Date().toLocaleString());
    next();
});

// Aplicando Middleware
function miMiddleware(request, response, next) {
    console.log("llama a mi middleware..");
    next();
};

router.get('/middleware', miMiddleware, (req, res) => {
    console.log("Consumiendo api GET /api/pets..");
    console.log("Mascotas actuales: ");
    console.log(pets);
    res.send(pets);
})


/*=============================================
=                   Section_03                =
=============================================*/
// Usando Multer
router.post("/profile", uploader.single('img'), (req, res) => {

    if (!req.file) {
        return res.status(400).send({ status: "error", mensaje: "No se adjunto archivo." });
    }
    console.log(req.file);


    // Persistimos una mascota con su foto
    let pet = req.body
    pet.id = Math.floor(Math.random() * 20 + 1);
    pet.image = req.file.path

    if (!pet.name || !pet.especie) {
        console.error("Mascota no es valida.");
        console.error(pet);
        res.status(400).send({ status: "Error", message: "Mascota invalida, verifique los datos de entrada." });
    } else {
        pets.push(pet);
        res.send({ status: "success", message: 'Mascota Creada!' })
    }

})





/*=============================================
=                   Section_01                =
=============================================*/
// Endpoints
router.get('/', (req, res) => {
    res.send(pets);
})

router.post('/', (req, res) => {
    let pet = req.body
    pet.id = Math.floor(Math.random() * 200 + 1);


    if (!pet.name || !pet.especie) {
        return res.status(403).send({ message: "Valores incompletos para el registro" })
    } else {
        pets.push(pet);
        res.send({ status: "success", msg: 'Mascota Creada!' })
    }
})





//exportamos router
export default router;