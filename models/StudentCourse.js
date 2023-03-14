import { DataTypes } from 'sequelize';

const StudentCourse = (sequelize, Sequelize) => {
    const StudentCourse = sequelize.define("student_courses", {
        student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
        course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }

    });
    return StudentCourse;
  };

  export default StudentCourse;