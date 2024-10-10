const socket = io();

const chatBox = document.getElementById('chatBox')
let user;




/* =====================================
=           Aplicando SWAL             =
===================================== */
Swal.fire({
    icon: 'info',
    title: 'Socket conectado!',
    input: 'text',
    text: 'Ingrese su userName para identificarse en ChatBox',
    color: '#116add',
    inputValidator: (value) => {
        if (!value) {
            return 'Por favor, ingrese un nombre de usuario'
        } else {
            // 2da parte
            socket.emit("userConnected", { user: value })
        }
    },
    allowOutsideClick: false // esto es para no dejar pasar al usuario si no completa el input, dando cli-ck afuera.
}).then(result => {
    user = result.value

    // Cargamos ese dato en el Navegador
    const myName = document.getElementById('myName')
    myName.innerText = user
})




chatBox.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            socket.emit('message', { user: user, message: chatBox.value })
            chatBox.value = ''
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Alerta',
                text: 'Por favor, ingrese un mensaje'
            })
        }
    }
})


// Escuchamos a todos los usuarios que estan conectados
// recivimos un array de objetos ---> [{ user: "Juan", message: "Hola" }, { user: "Elias", message: "Como estas?" }]
socket.on('messageLogs', data => {
    const messageLogs = document.getElementById('messageLogs');
    let logs = ''

    data.forEach(log => {
        logs += `<div><span>${log.user}: </span>${log.message}</div>`
    })
    messageLogs.innerHTML = logs;
})


// 2da parte
socket.on('userConnected', user => {
    let message = `Nuevo usuario conectado: ${user}`
    Swal.fire({
        icon: 'info',
        title: 'Nuevo usuario entra a la sala!!',
        text: message,
        toast: true,
        color: '#716add',
        position: 'top-right'
    })
})


