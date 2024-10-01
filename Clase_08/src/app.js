import express from 'express';
import usersRoutes from './routes/users.routes.js'
import petsRouter from './routes/pets.routes.js'
import __dirname from './utils.js';

const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"))

const PORT = 9090;


//mi middleware a nivel de endpoint
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

app.use('/api/user', usersRoutes)
app.use('/api/pet', petsRouter)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})