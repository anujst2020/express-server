
 import { Router } from 'express';
 const router = Router();
 import UserController from './Controller';
 import { authMiddleWare } from '../../libs/routes/authMiddleWare';
 
 router.get('/users', authMiddleWare, UserController.getUsers);
 router.post('/user', authMiddleWare, UserController.postUser);
 router.put('/user/:id', authMiddleWare, UserController.putUser);
 router.delete('/user/:id', authMiddleWare, UserController.deleteUser);
 
 export default router;
 