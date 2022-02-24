
 import { Router } from 'express';
 const router = Router();
 import UserController from './Controller';
 
 router.get('/user', UserController.getTrainee);
 router.post('/user', UserController.postTrainee);
 router.put('/user', UserController.putTrainee);
 router.delete('/user', UserController.deleteTrainee);
 
 export default router;
 