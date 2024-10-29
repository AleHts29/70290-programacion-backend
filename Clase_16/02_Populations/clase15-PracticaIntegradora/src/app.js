import express from 'express';
import __dirname from './util.js';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import viewsRouter from "./routes/views.router.js";

import studentsModel from './services/db/models/students.js';
import { coursesModel } from './services/db/models/courses.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Template engine
 */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))

//Declaración de Routers:
app.use('/', viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);

const SERVER_PORT = 9091;
app.listen(9091, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {

        /*=============================================
        =                   Population                =
        =============================================*/

        await mongoose.connect('mongodb://localhost:27017/colegio_C16?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");

        // // 1ro creamos al estudiante
        // let nuevoEstudiante = await studentsModel.create({
        //     name: "Luis",
        //     lastName: "Munar",
        //     age: "25",
        // })
        // let student = await studentsModel.findOne({ _id: nuevoEstudiante._id });
        // console.log(student);


        // Creamon un curso
        // let nuevoCurso = await coursesModel.create(
        //     {
        //         title: "Curso Java",
        //         description: "Curso backend de Java",
        //         teacherName: "Juan Torres"
        //     }
        // );
        // let cursoNuevo = await coursesModel.findOne({ _id: nuevoCurso._id });



        // // 3ro creamos la relacion
        // let student = await studentsModel.findOne({ _id: "67203bf125e5bc636611a44c" });
        // console.log(JSON.parse(JSON.stringify(student, null, 2)));

        // student.courses.push({ course: "66e0d6c356976369c13fd5e2" })
        // console.log(student);


        // // // 4to Actualizamos la data en la DB
        // let result = await studentsModel.updateOne({ _id: "67203bf125e5bc636611a44c" }, student);
        // console.log(result);



        // 5to agregamos populate al estudiante
        // let student = await studentsModel.find({ _id: "67203bf125e5bc636611a44c" }).populate("courses.course");
        // console.log(student);
        // console.log(JSON.stringify(student, null, '\t'));





        // // usando Middleware
        let student = await studentsModel.find({ _id: "67203bf125e5bc636611a44c" })
        console.log(JSON.stringify(student, null, '\t'));



    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();