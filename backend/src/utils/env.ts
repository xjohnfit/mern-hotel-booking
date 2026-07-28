import dotenv from 'dotenv';

dotenv.config({
    path: '.env.local',
});

export const { PORT } = process.env;
