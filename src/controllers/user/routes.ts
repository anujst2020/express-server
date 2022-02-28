
 import { Router } from 'express';
 const router = Router();
 import UserController from './Controller';
 import { authMiddleWare } from '../../libs/routes/authMiddleWare';
 // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWI1YzU3ZGRiNzdkZGRhMGIyZmU1MSIsImVtYWlsIjoic2h5YW1AYXNkLmNvbSIsImlhdCI6MTY0NjA0ODg1NCwiZXhwIjoxNjQ2MDQ5NzU0fQ.DYAkt9ibh6lohqTxWOU6_ffgrbhqO0K9wm2dCIWsAwc
 
  /**
 * @swagger
 *  /api/login:
 *   post:
 *     parameters:
 *          - in: formData
 *            name: email
 *            type: string
 *            required: true
 *          - in: formData
 *            name: password
 *            type: string
 *            required: true
 *     description: User Login
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.post('/login', UserController.login);

 /**
 * @swagger
 *  /api/users:
 *   get:
 *     parameters:
 *          - in: query
 *            name: token
 *            type: string
 *            required: true
 *     description: Get Users
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.get('/users', authMiddleWare, UserController.getUsers);

 /**
 * @swagger
 *  /api/user/{id}:
 *   get:
 *     parameters:
 *          - in: query
 *            name: token
 *            type: string
 *            required: true
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *     description: Get User
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.get('/user/:id', authMiddleWare, UserController.getUser);

 /**
 * @swagger
 *  /api/user:
 *   post:
 *     parameters:
 *          - in: query
 *            name: token
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
 *          - in: formData
 *            name: password
 *            type: string
 *            required: true
 *     description: Create User
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.post('/user', authMiddleWare, UserController.postUser);

 /**
 * @swagger
 *  /api/user/{id}:
 *   put:
 *     parameters:
 *          - in: query
 *            name: token
 *            type: string
 *            required: true
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
 *     description: Update User
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.put('/user/:id', authMiddleWare, UserController.putUser);

 /**
 * @swagger
 *  /api/user/{id}:
 *   delete:
 *     parameters:
 *          - in: query
 *            name: token
 *            type: string
 *            required: true
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *     description: delete User
 *     responses:
 *       200:
 *         description: Success
 *
 */
 router.delete('/user/:id', authMiddleWare, UserController.deleteUser);
 
 export default router;