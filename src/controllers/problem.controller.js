import Problem from "../models/problem.model.js";
import mongoose from "mongoose";

const create_problem = async (req, res) => {
    const {
        title,
        description,
        difficulty,
        tags,
        editorial,
        userId,
        usersSolved,
        doubts,
        createrId
    } = req.body;
    try {
        const problem = new Problem({
            title,
            description,
            difficulty,
            tags,
            createrId
        });
        if (!mongoose.Types.ObjectId.isValid(createrId)) {
            return res.status(400).json({ message: "Invalid createrId" });
        }
        await problem.save();
        return res.status(201).json({ message: "Problem Successfully Created", problem });
    } catch (error) {
        return res.status(500).json({ message: "Error in Creating Problem", error: error.message });
    }
}

const create_problem_all = async (req, res) => {
    try {
        await Problem.insertMany(req.body);
        return res.status(201).json({ message: "All Problems Successfully Created" });
    } catch (error) {
        return res.status(500).json({ message: "Error in Creating All Problems", error: error.message });
    }
}

const get_problems = async (req, res) => {
    try {
        const problems = await Problem.find({});
        return res.status(200).json({ message: "All Problems", problems });
    } catch (error) {
        return res.status(500).json({ message: "Error in Fetching Problems", error: error.message });
    }
}

const get_problem_by_id = async (req, res) => {
    const { id } = req.params;
    try {
        const problem = await Problem.findById(id);
        if (problem) {
            return res.status(200).json({ message: "Problem", problem });
        }
        return res.status(404).json({ message: "Problem Not Found" });
    } catch (error) {
        return res.status(500).json({ message: "Error in Fetching Problem", error: error.message });
    }
}

const update_problem_by_id = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        description,
        difficulty,
        tags,
        editorial,
        userId,
        usersSolved,
        doubts,
        createrId
    } = req.body;
    try {
        const problem = await Problem.findById(id);
        if (problem) {
            problem.title = title;
            problem.description = description;
            problem.difficulty = difficulty;
            problem.editorial = editorial;
            problem.tags = tags;
            problem.userId = userId;
            problem.usersSolved = usersSolved;
            problem.doubts = doubts;
            problem.createrId = createrId;
            await problem.save();
            return res.status(200).json({ message: "Problem Successfully Updated", problem });
        }
        return res.status(404).json({ message: "Problem Not Found" });
    } catch (error) {
        return res.status(500).json({ message: "Error in Updating Problem", error: error.message });
    }
}

const delete_problem_by_id = async (req, res) => {
    const { id } = req.params;
    try {
        const problem = await Problem.findById(id);
        if (problem) {
            await problem.remove();
            return res.status(200).json({ message: "Problem Successfully Deleted", problem });
        }
        return res.status(404).json({ message: "Problem Not Found" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error in Deleting Problem", error: error.message });
    }
}

export default {
    create_problem,
    get_problems,
    get_problem_by_id,
    update_problem_by_id,
    delete_problem_by_id,
    create_problem_all
};
