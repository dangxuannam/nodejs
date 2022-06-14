import  { Router } from 'express'
import { create, list, read, remove, update } from '../controller/product';
import { userByid } from '../controller/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';
const router = Router();


router.get('/products', checkAuth, list);

router.get('/products/:id', checkAuth, read)

router.delete('/products/:id', checkAuth, remove)

router.post('/products',checkAuth, create)

router.put('/products/:id', checkAuth, update )

router.param("userId", userByid)
export default router;