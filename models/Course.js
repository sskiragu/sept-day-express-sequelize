import { DataTypes } from 'sequelize';

const Course = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      course_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false 
      }
    });
    return Course;
  };

  export default Course;