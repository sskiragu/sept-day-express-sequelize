import db from "../models/index.js";

const User = db.User;

const getAllUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No user found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await User.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "User not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createUser = async (req, res) => {
    const user = req.body;

    try {
        const response = await User.create(user);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "User created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { username, email, password} = req.body;
    try {
        const [ response ] = await User.update(
            {
                "username": username,
                "email": email,
                "password": password},
                { where: { id: id}});
        if(response === 0){
            res.status(404).json({"message": "User not found"});
        }else if(response){
            res.status(201).json({"message": "User updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await User.destroy({where: {id: id}})
        if(response === 0){
            res.status(404).json({"message": "User not found"});
        }else if(response){
            res.status(200).json({"message": "User deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createUser, getAllUsers, getUserById, updateUserById, deleteUserById };
