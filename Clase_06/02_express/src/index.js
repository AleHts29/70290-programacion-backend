import express from 'express';

const app = express();
const PORT = 8080;

// Middleware para poder usar los req.query
app.use(express.urlencoded({ extended: true }));





app.get('/', (req, res) => {
    res.send("Hola usando Express!!!")
})




app.get('/bienvenida', (req, res) => {
    res.send('<p style="color:blue">Bienvenido a express!</p>')
})



app.get('/usuarios', (req, res) => {
    const usuarios = [
        {
            nombre: 'John Doe',
            email: 'johndoe@example.com',
            edad: 30
        },
        {
            nombre: 'Jane Smith',
            email: 'janesmith@example.com',
            edad: 28
        },
        {
            nombre: 'Alice Johnson',
            email: 'alicejohnson@example.com',
            edad: 25
        }
    ]

    res.send(usuarios)
})




/*=============================================
=              Usando req.params              =
=============================================*/

app.get('/usuario2/:nombre/:apellido', (req, res) => {
    // console.log(req.params.nombre);

    res.send(`Hola tu nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})


/**
 * Ejemplo en vivo: Usando arreglos y request params
 */

const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
];



app.get('/user-all', (req, res) => {
    res.send(usuarios)
})


app.get('/user-id/:userId', (req, res) => {

    let { userId } = req.params;
    console.log(typeof userId);

    const user = usuarios.find(u => u.id === parseInt(userId))
    if (user) {
        return res.json(user)
    }

    res.send({ message: "user no exist" })
})




/*=============================================
=         Usando req.query                 =
=============================================*/

// http://localhost:8080/ejemplo-query?nombre=Santiago&apellido=Peralta
app.get('/ejemplo-query', (req, res) => {

    let datos = req.query
    console.log(datos);


    res.send("ejemploQueries")
})



app.get('/usuarios-genero', (request, response) => {
    let { genero } = request.query;
    if (genero) {
        return response.send(usuarios.filter(u => u.genero == genero));
    }
    response.send(usuarios); // Si no hay género, envía todos los usuarios
});


app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
})