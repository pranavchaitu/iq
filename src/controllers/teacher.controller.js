import  Teacher  from "../models/teacher.model.js";

// create a teacher
const create_teacher = async (req, res) => {
    const { username, email, password } = req.body;
    const newTeacher = new Teacher({ username, email, password });
    try {
        await newTeacher.save();
        res.status(201).json({ message: "Teacher created successfully", teacher: newTeacher });
        console.log("Teacher created successfully",     newTeacher);
    } catch (error) {
        res.status(409).json({ message: "Error creating teacher", error: error.message });
    }
}

// create a teacherAll
const create_teacher_all = async (req, res) => {
    const teachers  = req.body;
    try {
        await Teacher.insertMany(teachers);
        res.status(201).json({ message: "Teachers created successfully", teachers });
    } catch (error) {
        res.status(409).json({ message: "Error creating teachers", error: error.message });
    }
}

// get all teachers
const get_all_teachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({});
        res.status(200).json({ message: "Teachers retrieved successfully", teachers });
    } catch (error) {
        res.status(404).json({ message: "Error retrieving teachers", error: error.message });
    }
}

// get teacher by id
const get_teacher_by_id = async (req, res) => {
    const { id } = req.params;
    try {
        const teacher = await Teacher.findById(id);
        if (teacher) {
            res.status(200).json({ message: "Teacher retrieved successfully", teacher });
        } else {
            res.status(404).json({ message: "Teacher not found" });
        }
    } catch (error) {
        res.status(404).json({ message: "Error retrieving teacher", error: error.message });
    }
}

// update teacher by id
const update_teacher_by_id = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            id, 
            { username, email, password }, 
            { new: true }
        );
        if (updatedTeacher) {
            res.status(200).json({ message: "Teacher updated successfully", teacher: updatedTeacher });
        } else {
            res.status(404).json({ message: "Teacher not found" });
        }
    } catch (error) {
        res.status(404).json({ message: "Error updating teacher", error: error.message });
    }
}

// delete teacher by id
const delete_teacher_by_id = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(id);
        if (deletedTeacher) {
            res.status(200).json({ message: "Teacher deleted successfully" });
        } else {
            res.status(404).json({ message: "Teacher not found" });
        }
    } catch (error) {
        res.status(404).json({ message: "Error deleting teacher", error: error.message });
    }
}

export default {
    create_teacher,
    get_all_teachers,
    create_teacher_all,
    get_teacher_by_id,
    update_teacher_by_id,
    delete_teacher_by_id
};
