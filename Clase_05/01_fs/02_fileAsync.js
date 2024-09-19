/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/



const fs = require("fs");
const dirNameAsync = "./files2";
const fileNameAsync = dirNameAsync + "/ejemploCallback.txt";

let data = "Hola Coders, estoy en un archivo! - utilizando callbacks"


fs.mkdir(dirNameAsync, { recursive: true }, (err) => {
    if (err) throw Error("Error - No se pudo crear el directorio base!")


    // Escritura
    fs.writeFile(fileNameAsync, data, (err, data) => {
        if (err) throw Error("Error - No se pudo escribir el archivo!")
    })

    // Lectura
    fs.readFile(fileNameAsync, 'utf-8', (err, data) => {
        if (err) throw Error("No se pudo leer el archivo!");
        console.log("Contenido del archivo:");
        console.log(data);
        // Agregamos mas contenido
        fs.appendFile(fileNameAsync, " -- Mas contenido", (err) => {
            if (err) throw Error("No se pudo actualizar el archivo!");
            // leemos de vuelta el archivo
            fs.readFile(fileNameAsync, "utf8", (err, data) => {
                if (err) throw Error("No se pudo leer el archivo!");
                console.log("Contenido del archivo actualizado:");
                console.log(data);
            })
        })
    })
})