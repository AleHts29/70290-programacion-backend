import express from 'express';
import productsRouter from './routes/products.router.js'

const app = express();
const PORT = 9090;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/products", productsRouter)

// TODO - implement cart
// // Ejemplo para el Carrito
// const carts = [
//     {
//         userId: 1,
//         products: [
//             { id: 1, quantity: 2 },
//             { id: 2, quantity: 1 },
//         ],
//     },
//     {
//         userId: 2,
//         products: [
//             { id: 1, quantity: 3 },
//             { id: 3, quantity: 1 },
//         ],
//     },
//     //... more carts...
// ]


app.listen(PORT, () => {
    console.log("listening on port: " + PORT);

});
