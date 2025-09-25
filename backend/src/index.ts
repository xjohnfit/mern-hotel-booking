import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

//Route import
import usersRoutes from './routes/usersRoutes';

//Files import
import DBConnection from '../utils/DBConnection'

dotenv.config({
    path: './.env.local',
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    DBConnection();
});
