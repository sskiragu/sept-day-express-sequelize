import db from "../models/index.js";

const UserRole = db.UserRole;

const getAllUserRoles = async (req, res) => {

}

const getUserRoleById = async (req, res) => {

}

export const createUserRole = async (req, res) => {
    try {
        const response = await UserRole.create(req.body);
        res.status(201).json({"message": "UserRole created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateUserRoleById = async (req, res) => {

}

const deleteUserRoleById = async (req, res) => {

}