import * as mongoose from 'mongoose';
 
 // Define the User Schema
 export const UserSchema = new mongoose.Schema({
     first_name: { type: String },
     last_name: { type: String },
     email: { type: String, unique: true },
     password: { type: String }
 }, {
     timestamps: true
 });