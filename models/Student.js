import { DataTypes } from 'sequelize';

const Student = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      student_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull:false 
      }
    });
    return Student;
  };

  export default Student;