class User {
    public static getTrainee(req, res){
        return res.status(200).send({'message': 'get method of user controller'});
    }

    public static postTrainee(req, res){
        return res.status(200).send({'message': 'post method of user controller'});

    }

    public static putTrainee(req, res){
        return res.status(200).send({'message': 'put method of user controller'});
    }

    public static deleteTrainee(req, res){
        return res.status(200).send({'message': 'delete method of user controller'});
    }
}

export default User;