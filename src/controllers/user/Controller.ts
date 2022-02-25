class User {
    public static getUser(req, res){
        return res.status(200).send({'message': 'get method of user controller'});
    }

    public static postUser(req, res){
        // get data from body and perform task
        return res.status(200).send({'message': 'post method of user controller'});

    }

    public static putUser(req, res){
        // get data from body and perform task
        return res.status(200).send({'message': 'put method of user controller'});
    }

    public static deleteUser(req, res){
        // Get id from param/body and perform task
        return res.status(200).send({'message': 'delete method of user controller'});
    }
}

export default User;