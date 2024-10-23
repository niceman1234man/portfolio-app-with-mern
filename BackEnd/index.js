import express from 'express';
import dotenv from 'dotenv';
import {connectDb} from './config/db.js'
import router from './routes/router.js'
import cors from 'cors'
dotenv.config();
const port = process.env.PORT || 9000 ; // Default to 9000 if PORT is not set
const app = express();
app.use(cors());
app.use(express.json());
app.use('/home',router);
app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        connectDb();
        console.log(`Server is running on http://localhost:${port}`);
    }
});