import { DataTypes } from 'sequelize';

const UserRole = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("user_roles", {
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }

    });
    return UserRole;
  };

  export default UserRole;