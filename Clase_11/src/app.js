import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io'


import __dirname from './utils.js';
import viewRouter from './routes/views.router.js'


// Declaramos express 
const app = express();
const PORT = process.env.PORT || 8080;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Ubicacion de carpeta public
app.use(express.static(__dirname + '/public/'))


app.use("/ping", (req, res) => {
    res.send("pong")
})

// usando router y hbs
app.use('/socket', viewRouter)


const httpServer = app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})



// instanciamos socket.io
const socketServer = new Server(httpServer)

const logs = []
socketServer.on('connection', socket => {
    // TODO - Se implemta todo lo relacionado a sockets

    // Esto lo ve cualquier user que se conecte
    socketServer.emit('messageLogs', logs)



    // Ejemplo Chat Basico
    socket.on('message', data => {
        logs.push(data)

        // Enviar los logs a los clientes
        socketServer.emit('messageLogs', logs)
    });


    // hacemos un broadcast del nuevo usuario que se conecta al chat
    // Notificacion push al resto de los usuarios
    socket.on('userConnected', data => {
        console.log(data);
        socket.broadcast.emit('userConnected', data.user)

    })

})
