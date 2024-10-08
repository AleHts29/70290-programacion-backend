import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io'


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

const log = []
socketServer.on('connection', socket => {
    // TODO - Se implemta todo lo relacionado a sockets

    // envio el log para cualquier cliente nuevo que se conecte al canal de socket
    socket.emit('logs', { log })



    // // Escucahmos al cliente
    // socket.on('mensaje_key', data => {
    //     console.log(data);
    // })


    // envio info al cliente
    // socket.emit('msg_02', "Hola desde el server")


    // socket.broadcast.emit('msg_03', "Este evento es para todos los sockets, menos el socket desde que se emitió el mensaje!")

    // socketServer.emit('msg_04', "Todos los que esten conectados ven este mensaje!!!")



    // Ejemplo Chat Basico
    socket.on('nuevo_mensaje', data => {
        log.push({ socketid: socket.id, message: data })

        // Enviar los logs a los clientes
        socketServer.emit('logs', { log })
    });

})
