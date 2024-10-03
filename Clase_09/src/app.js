import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './routes/views.router.js'


// Declaramos express 
const app = express();
const PORT = 8080;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Ubicacion de carpeta public
app.use(express.static(__dirname + '/public/'))




// Ruta de prueba para Hbs
app.get('/hello', (req, res) => {
    // usuario de prueba
    const usuario = {
        nombre: 'Harold Flores',
        email: 'johndoe@example.com',
        edad: 30
    }

    res.render('hello', usuario)
})

// Actividad:
const users = [
    {
        name: "Mauricio",
        last_name: "Espinosa",
        age: 26,
        phone: "5541231355",
        email: "correomau@correo.com"
    },
    {
        name: "Marisol",
        last_name: "Cadena",
        age: 23,
        phone: "15431231355",
        email: "correomary@correo.com"
    },
    {
        name: "Jorge",
        last_name: "Velez",
        age: 28,
        phone: "4331234155",
        email: "correojorge@correo.com"
    },
    {
        name: "Uriel",
        last_name: "Dueñas",
        age: 18,
        phone: "1233315451",
        email: "correouriel@correo.com"
    },
    {
        name: "Verónica",
        last_name: "Duarte",
        age: 45,
        phone: "66521233",
        email: "correoVero@correo.com"
    }
];

app.get('/user', (req, res) => {
    const random = Math.floor(Math.random() * users.length);
    res.render('users', { user: users[random], style: 'index.css' })
})



// usando router y hbs
app.use('/food', viewRouter)


app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})