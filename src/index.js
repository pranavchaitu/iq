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

const app = express();
app.use(express.json()); // middleware to parse json data

// user routes
app.use("/api/users" , user_route)
app.use("/api/problems" , problem_route)
app.use("/api/doubts" , doubt_route)


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


