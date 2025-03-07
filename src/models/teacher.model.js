/**
 * Teacher Schema
 * @module model/teacher.model
 * 
 * @property {String} username - The username of the teacher
 * @property {String} email - The email of the teacher
 * @property {String} password - The password of the teacher
 * 
 * @property {Problem[]} createdProblems - The subject of the teacher
 * 
 */
import mongoose from "mongoose";

const teacher_schema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        unique : true
    },
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    password : {
        type : String ,
        required : true
    } ,
    createdProblems : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Problem"
    }] // array of problem ids
} , { timestamps: true });

const Teacher = mongoose.model("Teacher" , teacher_schema);
export default Teacher;
