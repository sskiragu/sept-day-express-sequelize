import db from "../models/index.js";

const Course = db.Course;

const getAllCourses = async (req, res) => {
    try {
        const response = await Course.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No course found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Course.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Course not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createCourse = async (req, res) => {
    const course = req.body;

    try {
        const response = await Course.create(course);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "Course created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateCourseById = async (req, res) => {
    const { id } = req.params;
    const { course_id, title, description} = req.body;
    try {
        const [ response ] = await Course.update(
            {
                "course_id": course_id,
                "title": title,
                "password": description},
                { where: { course_id: id}});
        if(response === 0){
            res.status(404).json({"message": "Course not found"});
        }else if(response){
            res.status(201).json({"message": "Course updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Course.destroy({where: {course_id: id}})
        if(response === 0){
            res.status(404).json({"message": "Course not found"});
        }else if(response){
            res.status(200).json({"message": "Course deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createCourse, getAllCourses, getCourseById, updateCourseById, deleteCourseById };
