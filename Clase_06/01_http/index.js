const http = require('http');
const PORT = 8080;



const server = http.createServer((req, res) => {
    res.end("Hola unsando Nodemon!!!")
})


server.listen(PORT, () => [
    console.log(`El server está escuchando en el puerto ${PORT}`),
    console.log('Para probarlo, abre tu navegador en http://localhost:8080')
])