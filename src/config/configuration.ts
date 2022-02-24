import * as dotenv from 'dotenv';
dotenv.config();
import { IConfig } from './IConfig';


var config:IConfig = { 
    port:process.env.PORT,
    env:process.env.NODE_ENV, 
 }

 export default config;