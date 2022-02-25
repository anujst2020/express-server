import UserModel  from '../../repositories/user/UserModel';

class User {
    public static getUsers(req, res){
        UserModel.find({},{password: 0},(err, users)=>{
            if(err)
                return res.status(500).send({data:[], 'message': err.message});
            return res.status(200).send({data: users, 'message': 'get method of user controller'});
        });
    }

    public static postUser(req, res){
        // get data from body and perform task
        UserModel.create({},(err, user)=>{
            if(err)
                return res.status(500).send({'message': err.message});
            return res.status(200).send({'message': 'user created successfully'});
        });
    }

    public static putUser(req, res){
        // get data from body and perform task
        UserModel.updateOne({_id: req.body.id},
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
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