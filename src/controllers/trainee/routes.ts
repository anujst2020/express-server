
 import { Router } from 'express';
 const router = Router();
 import TraineeController from './Controller';
 import { dataValidMiddleware } from '../../middleware/dataMiddleware';
 
 router.get('/trainees', dataValidMiddleware, TraineeController.getTrainees);
 router.post('/trainee', TraineeController.postTrainee);
 router.put('/trainee/:id', TraineeController.putTrainee);
 router.delete('/trainee/:id', TraineeController.deleteTrainee);
 
 export default router;
 