class Trainee {
    public static getTrainee(req, res){
        return res.status(200).send({'message': 'get method of trainee controller'});
    }

    public static postTrainee(req, res){
        return res.status(200).send({'message': 'post method of trainee controller'});

    }

    public static putTrainee(req, res){
        return res.status(200).send({'message': 'put method of trainee controller'});
    }

    public static deleteTrainee(req, res){
        return res.status(200).send({'message': 'delete method of trainee controller'});
    }
}

export default Trainee;