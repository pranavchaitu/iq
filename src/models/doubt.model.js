/**
 * doubt Schema
 * @module model/doubt.model
 * 
 * @property {String} title - The title of the doubt
 * @property {String} description - The description of the doubt
 * 
 * @property {Problem} problemId - The problem related to the doubt
 * @property {Student} studentId - The student who asked the doubt
 * @property {Student} assignedId - The teacher who answered the doubt
 * 
 * 
 */

import mongoose from "mongoose";

const doubt_schema = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    description : {
        type : String ,
        required : true
    },
    problemId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Problem" ,
        required : true
    },
    studentId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Student" ,
        required : true
    },
    assignedId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Student" ,
    }
} , { timestamps: true });

const Doubt = mongoose.model("Doubt" , doubt_schema);
export default Doubt;
