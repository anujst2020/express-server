import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import { middleware1 } from './libs/routes/notFoundRoute';
import { traineeRouter, userRouter} from './router';
import Database from './libs/Database';
//import traineeRouter from './controllers/trainee/routes';
//import userRrouter from './controllers/user/routes';
const app = express()
const router = express.Router();
 
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
        router.get('/api/login', (req, res) => {
            // moduleName, role and permissionType we get from db based on user
            let token = jwt.sign({moduleName: 'getUsers', role: 'trainee', permissionType: 'read'}, process.env.JWT_KEY, {expiresIn: '36000s'});
            res.status(200).send({token});
        });
        router.get('/', (req, res) => {
            res.status(200).send('Express home');
        });
        router.get('/health-check', (req, res) => {
            res.status(200).send('I am ok');
        });
        router.get('/api/data-seeder', (req, res) => {
            Database.dataSeeder().then((response)=>{
                res.status(200).send('Data seeded successfully');
            }).catch((error)=>{
                res.status(200).send('Data not seeded');
            });
        });
        app.use('/api', traineeRouter);
        app.use('/api', userRouter);
        return router;
     }

     public initBodyParser (): void {
        app.use(bodyParser.urlencoded({extended: false}));
     }
 }

 /** Export the express module */
 export default Server;