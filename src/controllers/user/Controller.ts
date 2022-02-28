import UserModel  from '../../repositories/user/UserModel';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

class User {
    public static async login(req, res){
        try{
            let email = req.body.email; // 'shyam@asd.com'
            let password = req.body.password; // 'password'

            let user = await UserModel.findOne({email: email},{email: 1, password: 1});
            if(user){
                let status = bcrypt.compareSync(password, user.password);
                if(status){
                    let token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY, {expiresIn: '900s'});
                    res.status(200).send({token});
                }else{
                    return res.status(200).send({'message': 'wrong credentials'});
                }
            }else{
                return res.status(200).send({'message': 'User not exist'});
            }
        }catch(err){
            return res.status(200).send({'message': err.message});
        }
    }

    public static getUsers(req, res){
        let limit = req.query.limit? req.query.limit: 10;
        let skip = req.query.page? (parseInt(req.query.page)-1)*limit: 0;
        let search_name = req.query.name;
        let search_email = req.query.email;
        let search_obj = {};
        if(search_name && search_email){
            search_obj = {first_name: {$regex: search_name, $options: 'i'}, email: {$regex: search_email, $options: 'i'}};
        }else if(search_email){
            search_obj = {email: {$regex: search_email, $options: 'i'}};
        }else if(search_name){
            search_obj = {first_name: {$regex: search_name, $options: 'i'}};
        } 

        var query = UserModel.find(search_obj, {password: 0, __v: 0}).skip(skip).limit(limit).sort({email: 1});
        query.exec((err, users)=>{
            if(err)
                return res.status(500).send({data:[], 'message': err.message});
            return res.status(200).send({data: users, 'message': 'users fetched successfully'});
        });
    }

    public static getUser(req, res){
        UserModel.findOne({_id: req.params.id},{password: 0},(err, users)=>{
            if(err)
                return res.status(500).send({data:[], 'message': err.message});
            return res.status(200).send({data: users, 'message': 'user fetched successfully'});
        });
    }

    public static postUser(req, res){
        // get data from body and perform task
        const hash = bcrypt.hashSync(req.body.password, 10);
        UserModel.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        },(err, user)=>{
            if(err)
                return res.status(500).send({'message': err.message});
            return res.status(200).send({'message': 'user created successfully'});
        });
    }

    public static putUser(req, res){
        // get data from body and perform task
        UserModel.updateOne({_id: req.params.id},
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email
            },
            (err, user)=>{
                if(err)
                    return res.status(500).send({'message': err.message});
                return res.status(200).send({'message': 'user updated successfully'});
            });
    }

    public static deleteUser(req, res){
        // Get id from param/body and perform task
        UserModel.deleteOne({_id: req.params.id}, (err, user)=>{
            if(err)
                return res.status(500).send({'message': err.message});
            return res.status(200).send({'message': 'User deleted successfully'});
        });
    }
}

export default User;