import * as mongoose from 'mongoose';
import { seedData } from './seedData';

class Database{
    open(mongo_url: string): void{
        mongoose.connect(mongo_url);
        let db = mongoose.connection;
        db.on('error', (err)=>{console.error(`Database connection error: ${err}`)});
        db.on('connected', (err, res) =>{
            console.log("Database connected successfully");
        });
    }
    disconnect(){
        mongoose.connection.close(()=>{
            console.log('disconnect');
        })
    }
    async dataSeeder(){
        return await seedData();
    }
}

export default new Database();