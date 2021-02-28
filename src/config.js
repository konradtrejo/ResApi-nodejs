import { config } from 'dotenv';
config();

export default {
    mongodb_URL: process.env.MONGODB_URI,
};


