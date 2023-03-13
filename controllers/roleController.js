import db from "../models/index.js";

const Role = db.Role;

const getAllRoles = async (req, res) => {

}

const getRoleById = async (req, res) => {

}

export const createRole = async (req, res) => {
    try {
        const response = await Role.create(req.body);
        res.status(201).json({"message": "Role created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateRoleById = async (req, res) => {

}

const deleteRoleById = async (req, res) => {

}
