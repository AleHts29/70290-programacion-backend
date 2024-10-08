// configuracion de socket
const socket = io()

// socket.emit('mensaje_key', "Hola soy el cliente!!!")

// escucho al server
// socket.on('msg_02', (data) => {
//     console.log(data)
// })


// broadcast
// socket.on('msg_03', (data) => {
//     console.log(data)
// })


socket.on('msg_04', (data) => {
    console.log(data)
})