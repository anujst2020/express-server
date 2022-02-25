 import * as bcrypt from 'bcrypt-nodejs';
 import * as mongoose from 'mongoose';
 import { IUser } from '../../repositories/user/IUserModel';
 import { UserSchema } from '../../repositories/user/UserSchema';

 const UserModel = mongoose.model<IUser>('User', UserSchema);

 export default UserModel;