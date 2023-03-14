import db from "../models/index.js";

const Role = db.Role;

const getAllRoles = async (req, res) => {
    try {
        const response = await Role.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No role found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Role.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Role not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createRole = async (req, res) => {
    try {
        const response = await Role.create(req.body);
        res.status(201).json({"message": "Role created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateRoleById = async (req, res) => {
    const { id } = req.params;
    const { name,description} = req.body;
    try {
        const [ response ] = await Role.update(
            {
                "name": name,
                "description": description},
                { where: { role_id: id}});
        if(response === 0){
            res.status(404).json({"message": "Role not found"});
        }else if(response){
            res.status(201).json({"message": "Role updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteRoleById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Role.destroy({where: {role_id: id}})
        if(response === 0){
            res.status(404).json({"message": "Role not found"});
        }else if(response){
            res.status(200).json({"message": "Role deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createRole, getAllRoles, getRoleById, updateRoleById, deleteRoleById };

