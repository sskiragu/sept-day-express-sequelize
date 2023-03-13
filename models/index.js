import { Sequelize } from 'sequelize';

import sequelize from '../config/db.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import User from './User.js';
db.User = User(sequelize, Sequelize);

import Role from './Role.js';
db.Role = Role(sequelize, Sequelize);

import Student from './Student.js';
db.Student = Student(sequelize, Sequelize);

import Course from './Course.js';
db.Course = Course(sequelize, Sequelize);

import UserRole from "../models/UserRole.js";
db.UserRole = UserRole(sequelize, Sequelize);

//Role & User has Many-To-Many Relationship
db.Role.belongsToMany(db.User, {
  through: "user_roles",
  foreignKey: "role_id",
  otherKey: "user_id"
});

db.User.belongsToMany(db.Role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id"
});

//User & Student has One-To-One Relationship
db.User.hasOne(db.Student);

db.Student.belongsTo(db.User, {
    foreignKey: "student_id"
});

//Student & Course has Many-To-Many Relationship
db.Student.belongsToMany(db.Course, {
    through: "student_courses",
    foreignKey: "student_id",
    otherKey: "course_id"
  });
  
  db.Course.belongsToMany(db.Student, {
    through: "student_courses",
    foreignKey: "course_id",
    otherKey: "student_id"
  });

export default db;