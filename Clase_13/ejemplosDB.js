/*
- Se creará una base de datos llamada “baseCRUD”.
- Se agregará una colección llamada “mascotas”
- Se agregarán 3 mascotas con las propiedades: nombre, especie, edad
- Se buscarán mascotas por su especie
Contar el número de mascotas totales agregadas

*/

db.mascotas.insertMany(
    [
        { nombre: "Milo", especie: "Perro", edad: 5 },
        { nombre: "Buddy", especie: "Perro", edad: 3 },
        { nombre: "Luna", especie: "Gato", edad: 2 }
    ]
)

// Se buscarán mascotas por su especie
baseCRUD > db.mascotas.find({ especie: "Gato" })
[
    {
        _id: ObjectId('67105690dd89f10a08fba30f'),
        nombre: 'Luna',
        especie: 'Gato',
        edad: 2
    }
]

// Contar el número de mascotas totales agregadas
baseCRUD > db.mascotas.countDocuments()
3




// =================================================================


// 02
/*
Sobre una base de datos llamada “colegio_c13”, crear una colección “estudiantes” donde se agregarán documentos con los siguientes datos:
nombre
apellido
curso
edad
correo
sexo 
Crear 5 estudiantes (Insert Many) con los campos mencionados arriba. Además, crear un estudiante sólo con nombre, apellido y curso. ¿Es posible?



Realizar una búsqueda para obtener a todos los estudiantes.
Realizar una búsqueda para obtener a todos los estudiantes de sexo H (hombre)
Realizar un conteo para obtener el número de documentos totales.
Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”

*/

db.estudiantes.insertMany([
    { nombre: "Sofia", apellido: "Lopez", curso: "C13", edad: 20, correo: "sopia@gmail.com", sexo: "F" },
    { nombre: "Pedro", apellido: "Martinez", curso: "C15", edad: 21, correo: "pedro@gmail.com", sexo: "M" },
    { nombre: "Maria", apellido: "Garcia", curso: "C13", edad: 22, correo: "maria@gmail.com", sexo: "F" },
    { nombre: "Juan", apellido: "Perez", curso: "C10", edad: 20, correo: "juan@gmail.com", sexo: "M" },
    { nombre: "Pablo", apellido: "Jankowski", curso: "C12", edad: 20, correo: "pablo@gmail.com", sexo: "M" },
])

db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez", curso: "backend" },
    { nombre: "David", apellido: "Reta", curso: "marketing" }
]);

// Realizar una búsqueda para obtener a todos los estudiantes.
colegio_c13 > db.estudiantes.find()

// Realizar una búsqueda para obtener a todos los estudiantes de sexo H (hombre)
colegio_c13 > db.estudiantes.find({ sexo: 'M' })

// Realizar un conteo para obtener el número de documentos totales.
colegio_c13 > db.estudiantes.countDocuments()

// Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”
colegio_c13 > db.estudiantes.countDocuments({ sexo: "F" })




// filtro $in --> devuelve coincidencias que se encuentran en el array
colegio_c13 > db.estudiantes.find({ edad: { $in: [20, 23] } })
[
    {
        _id: ObjectId('67105924dd89f10a08fba310'),
        nombre: 'Sofia',
        apellido: 'Lopez',
        curso: 'C13',
        edad: 20,
        correo: 'sopia@gmail.com',
        sexo: 'F'
    },
    {
        _id: ObjectId('67105924dd89f10a08fba313'),
        nombre: 'Juan',
        apellido: 'Perez',
        curso: 'C10',
        edad: 23,
        correo: 'juan@gmail.com',
        sexo: 'M'
    },
    {
        _id: ObjectId('67105924dd89f10a08fba314'),
        nombre: 'Pablo',
        apellido: 'Jankowski',
        curso: 'C12',
        edad: 20,
        correo: 'pablo@gmail.com',
        sexo: 'M'
    }
]



// FILTROS Avanzados
// Filtrar estudiantes que están en el curso "C13" y tienen más de 25 años:
db.estudiantes.find({
    $and: [
        { curso: 'C13' },
        { edad: { $gt: 21 } }
    ]
})


// Filtrar estudiantes que están en el curso "backend" o "react":
db.estudiantes.find({
    $or: [
        { curso: "backend" },
        { curso: "C13" }
    ]
})


// Filtrar estudiantes que tienen menos de 30 años:
db.estudiantes.find({
    edad: { $lt: 30 }
})


// Filtrar estudiantes que no están en el curso "marketing":
db.estudiantes.find({
    curso: { $ne: "marketing" }
})


// Proyecciones
colegio_c13 > db.estudiantes.find({}, { _id: 0, nombre: 1, apellido: 1 })


// Odenamientos
colegio_c13 > db.estudiantes.find().sort({ nombre: 1 }) // ascending
colegio_c13 > db.estudiantes.find().sort({ nombre: -1 }) // descending









/*

concepto de offset

4
3
2 
1
0 
-1
-2 <--Punto inicial offset=-2
-3


*/







// Ofset --> Mueve el punto de referencia (arranca desde 0)
colegio > db.estudiantes.find().skip(2)


// Limit --> Limita el numero de registros a mostrar
colegio > db.estudiantes.find().limit(2)


// UPDATEbyID
colegio > db.estudiantes.updateOne({ _id: ObjectId('66d0fe20085c5c4c4f394e4c') }, { $set: { apellido: 'Gonzalez' } })
colegio_c13 > db.estudiantes.updateOne({ _id: ObjectId('67105950dd89f10a08fba315') }, { $set: { edad: 27 } })


// FindByID
colegio > db.estudiantes.find({ _id: ObjectId('66d0fe20085c5c4c4f394e4c') })

// DELETE
colegio > db.estudiantes.deleteOne({ _id: ObjectId('66d0fe20085c5c4c4f394e4d') })