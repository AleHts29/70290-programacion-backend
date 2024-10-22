import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.router.js'

const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// declaracion de router
app.use("/api/users", userRouter);




// PUERTO
const PORT = 9090;

app.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}`);
});

// Coneccion a la DB
const PathDB = 'mongodb+srv://admin:admin@cluster0.8hkzesl.mongodb.net/clase14?retryWrites=true&w=majority&appName=Cluster0'


const connectMongoDB = async () => {
    try {
        await mongoose.connect(PathDB)
        console.log("Conectado a la base de datos MongoDB");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}
connectMongoDB()