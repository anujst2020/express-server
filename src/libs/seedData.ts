import UserModel from "../../src/repositories/user/UserModel";
import * as bcrypt from 'bcrypt';

let password = process.env.PASSWORD;
const hash = bcrypt.hashSync(password, 10);

const users = [
    {
        first_name: 'Ram',
        last_name: 'Kumar',
        email: 'ram@asd.com',
        password: hash
    },
    {
        first_name: 'Shyam',
        last_name: 'Singh',
        email: 'shyam@asd.com',
        password: hash
    },
    {
        first_name: 'Kim',
        last_name: 'Sharma',
        email: 'kim@asd.com',
        password: hash
    },
    {
        first_name: 'Anil',
        last_name: 'Puri',
        email: 'anil@asd.com',
        password: hash
    }
];

export async function seedData(){
    await UserModel.deleteMany({});
    return await UserModel.insertMany(users);
}