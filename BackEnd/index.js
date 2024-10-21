import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT ||9000 ; // Default to 9000 if PORT is not set

const app = express();

app.get('/hi', (req, res) => {
    res.send("hello express nnnnnn");
});

app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});