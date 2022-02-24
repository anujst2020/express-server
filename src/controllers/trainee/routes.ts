
 import { Router } from 'express';
 const router = Router();
 import TraineeController from './Controller';
 
 router.get('/trainee', TraineeController.getTrainee);
 router.post('/trainee', TraineeController.postTrainee);
 router.put('/trainee', TraineeController.putTrainee);
 router.delete('/trainee', TraineeController.deleteTrainee);
 
 export default router;
 