import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import { middleware1 } from './libs/routes/notFoundRoute';
import { traineeRouter, userRouter} from './router';
import Database from './libs/Database';
import * as swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import * as options from'./swagger.json';
const app = express()
const router = express.Router();
const swOptions = {...options, apis: [__dirname+'/Server.js', __dirname+'/controllers/user/routes.js', __dirname+'/controllers/trainee/routes.js']};
const swaggerDocument = swaggerJSDoc(swOptions);
console.log(__dirname+'/controllers/user/route.js');

class Server {
     config: any;
     port: any;
     /**
      * Initializes the express server
      */
     constructor (config) {
         this.port = config.port;
        //  this.bootstrap();
     }

     public bootstrap () {
         app.listen(this.port, () => console.log(`Running on port ${this.port}`))
         this.initBodyParser();
         let router: any = this.setupRoutes();
         app.use(router);
         app.use(middleware1);
         Database.open(process.env.MONGO_URL);
    }

     public setupRoutes (): any {
        /**
         * @swagger
         *  /:
         *   get:
         *     description: Home
         *     responses:
         *       200:
         *         description: Success
         *
         */

        router.get('/', (req, res) => {
            res.status(200).send({'message': 'Express home'});
        });

        /**
         * @swagger
         *  /health-check:
         *   get:
         *     description: Health Check
         *     responses:
         *       200:
         *         description: Success
         *
         */
        router.get('/health-check', (req, res) => {
            res.status(200).send({'message': 'I am ok'});
        });

        /**
         * @swagger
         *  /api/data-seeder:
         *   get:
         *     description: Data Seeder
         *     responses:
         *       200:
         *         description: Success
         *
         */
        router.get('/api/data-seeder', (req, res) => {
            Database.dataSeeder().then((response)=>{
                res.status(200).send({'message': 'Data seeded successfully'});
            }).catch((error)=>{
                res.status(200).send({'message': 'Data not seeded'});
            });
        });
        router.get('/api-docs', swaggerUi.setup(swaggerDocument));
        app.use('/api', traineeRouter);
        app.use('/api', userRouter);
        app.use('/api-docs', swaggerUi.serve);
        return router;
     }

     public initBodyParser (): void {
        app.use(bodyParser.urlencoded({extended: false}));
     }
 }

 /** Export the express module */
 export default Server;