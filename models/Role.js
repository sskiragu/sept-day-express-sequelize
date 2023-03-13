import { DataTypes } from 'sequelize';

const Role = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false 
      }
    });
    return Role;
  };

  export default Role;