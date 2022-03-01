
 import { Router } from 'express';
 const router = Router();
 import TraineeController from './Controller';
 import { dataValidMiddleware } from '../../middleware/dataMiddleware';
 
 router.get('/trainees', dataValidMiddleware('get'), TraineeController.getTrainees);
 router.get('/trainee/:id', dataValidMiddleware('getone'), TraineeController.getTrainee);
 router.post('/trainee', dataValidMiddleware('create'), TraineeController.postTrainee);
 router.put('/trainee/:id', dataValidMiddleware('update'), TraineeController.putTrainee);
 router.delete('/trainee/:id', dataValidMiddleware('delete'), TraineeController.deleteTrainee);
 
 export default router;
 