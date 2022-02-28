
 import { Router } from 'express';
 const router = Router();
 import TraineeController from './Controller';
 import { dataValidMiddleware } from '../../middleware/dataMiddleware';
 
 /**
 * @swagger
 *  /api/trainees:
 *   get:
 *     description: Get Trainees
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.get('/trainees', dataValidMiddleware, TraineeController.getTrainees);

 /**
 * @swagger
 *  /api/trainee/{id}:
 *   get:
 *     parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *     description: Get Trainee
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.get('/trainee/:id', TraineeController.getTrainee);

 /**
 * @swagger
 *  /api/trainee:
 *   post:
 *     parameters:
 *          - in: formData
 *            name: first_name
 *            type: string
 *            required: true
 *          - in: formData
 *            name: last_name
 *            type: string
 *            required: true
 *          - in: formData
 *            name: email
 *            type: string
 *            required: true
 *          - in: formData
 *            name: password
 *            type: string
 *            required: true
 *     description: Create Trainee
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.post('/trainee', TraineeController.postTrainee);

 /**
 * @swagger
 *  /api/trainee/{id}:
 *   put:
 *     parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *          - in: formData
 *            name: first_name
 *            type: string
 *            required: true
 *          - in: formData
 *            name: last_name
 *            type: string
 *            required: true
 *          - in: formData
 *            name: email
 *            type: string
 *            required: true
 *     description: Update Trainee
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.put('/trainee/:id', TraineeController.putTrainee);

 /**
 * @swagger
 *  /api/trainee/{id}:
 *   delete:
 *     parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *     description: delete Trainee
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.delete('/trainee/:id', TraineeController.deleteTrainee);
 
 export default router;
 