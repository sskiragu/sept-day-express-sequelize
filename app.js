import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import userRoleRouter from './routes/userRoleRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import studentCourseRoutes from './routes/studentCourseRoute.js';
import authRoutes from './routes/authRotes.js';

import errorHandler from './middlewares/errorHandler.js';

import db from './models/index.js';

const sequelize = db.sequelize;

dotenv.config();
const app = express();

app.use(express.json());
app.use(errorHandler);

sequelize.sync({alter: true}).then(() => {
    console.log("Tables created.");
}).catch(err =>{
    console.log(err);
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', roleRoutes);
app.use('/api/v1', userRoleRouter);
app.use('/api/v1', studentRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', studentCourseRoutes);
app.use('/api/v1', authRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});