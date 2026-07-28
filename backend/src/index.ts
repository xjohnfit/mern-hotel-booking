import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';
import { PORT } from './utils/env';
//Route import
import usersRoutes from './routes/usersRoutes';

//Files import
import DBConnection from './utils/DBConnection'



const app = express();
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    DBConnection();
});
