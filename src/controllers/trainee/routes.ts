
 import { Router } from 'express';
 const router = Router();
 import TraineeController from './Controller';
 import { dataValidMiddleware } from '../../middleware/dataMiddleware';
 
 router.get('/trainee', dataValidMiddleware, TraineeController.getTrainee);
 router.post('/trainee', TraineeController.postTrainee);
 router.put('/trainee', TraineeController.putTrainee);
 router.delete('/trainee/:id', TraineeController.deleteTrainee);
 
 export default router;
 