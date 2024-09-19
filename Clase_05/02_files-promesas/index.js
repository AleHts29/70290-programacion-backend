const fs = require('fs').promises;
const moment = require('moment');

// Datos a escribir en el archivo JSON
const data = {
    nombre: "Juan Perez",
    edad: 30,
    ciudad: "Madrid",
    fecha: moment().format('YYYY-MM-DD HH:mm:ss') // Usar moment para la fecha y hora
};

// Nombre del archivo JSON
const nombreArchivo = 'datos.json';

// Función para escribir datos en un archivo JSON
const escribirArchivoJSON = async (filename, data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(filename, jsonData, 'utf8');
        console.log('Archivo JSON creado y contenido escrito.');
    } catch (err) {
        console.error(`Error al escribir en el archivo: ${err}`);
    }
};

// Función para leer datos de un archivo JSON
const leerArchivoJSON = async (filename) => {
    try {
        const data = await fs.readFile(filename, 'utf8');
        const jsonData = JSON.parse(data);
        console.log('Contenido del archivo JSON:');
        console.log(jsonData);
    } catch (err) {
        console.error(`Error al leer el archivo: ${err}`);
    }
};

// Función principal para ejecutar las operaciones
const main = async () => {
    await escribirArchivoJSON(nombreArchivo, data);
    await leerArchivoJSON(nombreArchivo);
};

main();
