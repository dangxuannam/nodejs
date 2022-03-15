import  { Router } from 'express'
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();


router.get('/products', checkAuth, (req, res) => {
    const products = [
        {id: 1, name: "products A"},
        {id: 2, name: "products B"},
    ];
   res.json(products)
})

router.get('/product/:id', checkAuth, (req, res) => {
    const products = [
        {id: 1, name: "products A"},
        {id: 2, name: "products B"},
    ];
   
   res.json(products.find(item => item.id === +req.params.id))
})
router.delete('/product/:id', checkAuth, (req, res) => {
    const products = [
        {id: 1, name: "products A"},
        {id: 2, name: "products B"},
    ];
   
   res.json(products.filter(item => item.id !== +req.params.id))
})

router.post('/products', checkAuth, (req, res) => {
    console.log(req.body);
    const products = [
        {id: 1, name: "products A"},
        {id: 2, name: "products B"},
    ];
    products.push(req.body);
   res.json(products);
})
export default router;