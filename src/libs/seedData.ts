import UserModel from "../../src/repositories/user/UserModel";

const users = [
    {
        first_name: 'Ram',
        last_name: 'Kumar',
        email: 'ram@asd.com',
        password: 'password'
    },
    {
        first_name: 'Shyam',
        last_name: 'Singh',
        email: 'shyam@asd.com',
        password: 'password'
    },
    {
        first_name: 'Kim',
        last_name: 'Sharma',
        email: 'kim@asd.com',
        password: 'password'
    },
    {
        first_name: 'Anil',
        last_name: 'Puri',
        email: 'anil@asd.com',
        password: 'password'
    }
];

export async function seedData(){
    return await UserModel.insertMany(users);
}