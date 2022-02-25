
 import { Router } from 'express';
 const router = Router();
 import UserController from './Controller';
 import { authMiddleWare } from '../../libs/routes/authMiddleWare';
 
 router.get('/user', authMiddleWare, UserController.getUser);
 router.post('/user', authMiddleWare, UserController.postUser);
 router.put('/user', authMiddleWare, UserController.putUser);
 router.delete('/user/:id', authMiddleWare, UserController.deleteUser);
 
 export default router;
 