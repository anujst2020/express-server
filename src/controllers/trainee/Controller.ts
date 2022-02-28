import UserModel  from '../../repositories/user/UserModel';
import * as bcrypt from 'bcrypt';

class Trainee {

    public static getTrainees(req, res){
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
            return res.status(200).send({data: users, 'message': 'trainees fetched successfully'});
        });
    }

    public static getTrainee(req, res){
        UserModel.findOne({_id: req.params.id},{password: 0},(err, users)=>{
            if(err)
                return res.status(500).send({data:[], 'message': err.message});
            return res.status(200).send({data: users, 'message': 'trainee fetched successfully'});
        });
    }

    public static postTrainee(req, res){
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
            return res.status(200).send({'message': 'trainee created successfully'});
        });
    }

    public static putTrainee(req, res){
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
                return res.status(200).send({'message': 'trainee updated successfully'});
            });
    }

    public static deleteTrainee(req, res){
        // Get id from param/body and perform task
        UserModel.deleteOne({_id: req.params.id}, (err, user)=>{
            if(err)
                return res.status(500).send({'message': err.message});
            return res.status(200).send({'message': 'Trainee deleted successfully'});
        });
    }
}

export default Trainee;