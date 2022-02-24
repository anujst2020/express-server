import * as express from 'express'
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

     bootstrap () {
         app.listen(this.port, () => console.log(`Running on port ${this.port}`))
         let router: any = this.setupRoutes();
         app.use(router);
    }

     public setupRoutes (): any {
        router.get('/', (req, res) => {
            res.status(200).send('Express home');
        });
        router.get('/health-check', (req, res) => {
            res.status(200).send('I am ok');
        });
        return router;
     }
 }

 /** Export the express module */
 export default Server;