/**
 * user 
 * problem
 * doubt
 * 
 */

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// import routes
import user_route from './routes/user.route.js';
import problem_route from './routes/problem.route.js';
import doubt_route from './routes/doubt.route.js';
import teacher_route from './routes/teacher.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware to parse json data

// user routes
app.use("/api/users" , user_route)
app.use("/api/problems" , problem_route)
app.use("/api/doubts" , doubt_route)
app.use("/api/teachers" , teacher_route)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


