import db from "../models/index.js";

const StudentCourse = db.StudentCourse;

const getAllStudentCourses = async (req, res) => {
    try {
        const response = await StudentCourse.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No student course found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getStudentCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await StudentCourse.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Student Course not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createStudentCourseRole = async (req, res) => {
    try {
        const response = await StudentCourse.create(req.body);
        res.status(201).json({"message": "Student Course created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateStudentCourseById = async (req, res) => {
    const { students_id, courses_id } = req.params;
    const { student_id, course_id} = req.body;
    try {
        const [ response ] = await StudentCourse.update(
            {
                "student_id": student_id,
                "course_id": course_id},
                { where: { student_id: students_id, course_id: courses_id}});
        if(response === 0){
            res.status(404).json({"message": "Student Course not found"});
        }else if(response){
            res.status(201).json({"message": "Student Course updated."});
        }else{
            res.json({"message": "Unknown"});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteStudentCourseById = async (req, res) => {
    const { students_id, courses_id } = req.params;

    try {
        const response = await StudentCourse.destroy({where: { student_id: students_id, course_id: courses_id}})
        if(response === 0){
            res.status(404).json({"message": "Student Course not found"});
        }else if(response){
            res.status(200).json({"message": "Student Course deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createStudentCourseRole, getAllStudentCourses, getStudentCourseById, updateStudentCourseById, deleteStudentCourseById };
