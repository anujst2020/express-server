import config from './config/configuration';
import Server from './Server';

let obj = new Server(config);
obj.bootstrap();
