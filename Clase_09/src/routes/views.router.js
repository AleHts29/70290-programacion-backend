import express from 'express';

const router = express.Router();

let food = [
    { name: "Hamburguesa", price: "100" },
    { name: "Banana", price: "40" },
    { name: "Soda", price: "20" },
    { name: "Ensalada", price: "20" },
    { name: "Pizza", price: "20" }
];

let user = {
    name: "Hilda",
    last_name: "Martinez",
    role: 'admin'
}

router.get('/', (req, res) => {

    res.render('index', {
        user: user,
        isAdmin: user.role === 'admin',
        food,
        style: 'index.css'
    })
})





export default router;