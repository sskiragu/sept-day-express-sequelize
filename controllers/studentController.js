import db from "../models/index.js";

const Student = db.Student;

const getAllStudents = async (req, res) => {
    try {
        const response = await Student.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No student found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Student.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Student not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createStudent = async (req, res) => {
    const student = req.body;

    try {
        const response = await Student.create(student);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "Student created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateStudentById = async (req, res) => {
    const { id } = req.params;
    const { student_id, first_name, last_name, email, dob} = req.body;
    try {
        const [ response ] = await Student.update(
            {
                "student_id": student_id,
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "dob": dob},
                { where: { student_id: id}});
        if(response === 0){
            res.status(404).json({"message": "Student not found"});
        }else if(response){
            res.status(201).json({"message": "Student updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteStudentById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Student.destroy({where: {student_id: id}})
        if(response === 0){
            res.status(404).json({"message": "Student not found"});
        }else if(response){
            res.status(200).json({"message": "Student deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById };
