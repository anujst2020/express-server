class Trainee {
    public static getTrainees(req, res){
        return res.status(200).send({'message': 'get method of trainee controller'});
    }
    public static getTrainee(req, res){
        return res.status(200).send({'message': 'get method of trainee controller'});
    }

    public static postTrainee(req, res){
        // get data from body and perform task
        return res.status(200).send({'message': 'post method of trainee controller'});

    }

    public static putTrainee(req, res){
        // get data from body and perform task
        return res.status(200).send({'message': 'put method of trainee controller'});
    }

    public static deleteTrainee(req, res){
        // Get id from param/body and perform task
        return res.status(200).send({'message': 'delete method of trainee controller'});
    }
}

export default Trainee;