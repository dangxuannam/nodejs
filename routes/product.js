import  { Router } from 'express'
import { create, list, read, remove, update } from '../controller/product';
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();


router.get('/products', checkAuth, list);

router.get('/product/:id', checkAuth, read)

router.delete('/product/:id', checkAuth, remove)

router.post('/products', checkAuth, create)

router.put('/product/:id', checkAuth, update )
export default router;