import Doubt from '../models/doubt.model.js';

const create_doubt = async (req, res) => {
    try {
        const { title, description, problemId , userId  } = req.body;
        const doubt = await Doubt.create({
            title,
            description,
            problemId,
            userId,
        });
        return res.status(200).json({ Message: "Successfully Created Doubt", data: doubt });
    } catch (error) {
        return res.status(500).json({ Message: "Error Creating Doubt", error: error.message });
    }
};

const get_doubt_all = async (req, res) => {
    try {
        const doubts = await Doubt.find({});
        return res.status(200).json({ Message: "Successfully Retrieved Doubts", data: doubts });
    } catch (error) {
        return res.status(500).json({ Message: "Error Retrieving Doubts", error: error.message });
    }
}

const get_doubt_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const doubt = await Doubt.findById(id);
        if (doubt) {
            return res.status(200).json({ Message: "Successfully Retrieved Doubt", data: doubt });
        }
        return res.status(404).json({ Message: "Doubt with the specified ID does not exist" });
    } catch (error) {
        return res.status(500).json({ Message: "Error Retrieving Doubt by ID", error: error.message });
    }
}

const update_doubt_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, active , problemId , userId } = req.body;
        const doubt = await Doubt.findByIdAndUpdate(id, {
            title,
            active,
            description,
            problemId,
            userId,
        }, { new: true });
        if (doubt) {
            return res.status(200).json({ Message: "Successfully Updated Doubt", data: doubt });
        }
        return res.status(404).json({ Message: "Doubt with the specified ID does not exist" });
    } catch (error) {
        return res.status(500).json({ Message: "Error Updating Doubt", error: error.message });
    }
}


const delete_doubt_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const doubt = await Doubt.findByIdAndDelete(id);
        if (doubt) {
            return res.status(200).json({ Message: "Successfully Deleted Doubt", data: doubt });
        }
        return res.status(404).json({ Message: "Doubt with the specified ID does not exist" });
    } catch (error) {
        return res.status(500).json({ Message: "Error Deleting Doubt", error: error.message });
    }
}

const assign_doubt_to_student = async (req, res) => {
    try {
        const { id } = req.params;
        const { assignedId } = req.body;
        const doubt = await Doubt.findByIdAndUpdate(id, { assignedId }, { new: true });
        if (doubt) {
            return res.status(200).json({ Message: "Successfully Assigned Doubt to Student", data: doubt });
        }
        return res.status(404).json({ Message: "Doubt with the specified ID does not exist" });
    }
    catch (error) {
        return res.status(500).json({ Message: "Error Assigning Doubt to Student", error: error.message });
    }
}

const answer_doubt = async (req, res) => {
    try {
        const { id } = req.params;
        const { answer } = req.body;
        const doubt = await Doubt.findById(id);
        
        if (doubt) {
            doubt.answer = answer;
            doubt.active = false;
            await doubt.save();
            return res.status(200).json({ Message: "Successfully Answered Doubt", data: doubt });
        }
        return res.status(404).json({ Message: "Doubt with the specified ID does not exist" });
    }
    catch (error) {
        return res.status(500).json({ Message: "Error Answering Doubt", error: error.message });
    }
}

const update_doubt_resolve = async (req, res) => {
    try {
        const { id } = req.params;
        const { active } = req.body;
        const doubt = await Doubt.findByIdAndUpdate(id, { active }, { new: true });
        if (doubt) {
            return res.status(200).json({ Message: "Successfully Updated Doubt Status", data: doubt });
        }
        return res.status(404).json({ Message: "Doubt with the specified ID does not exist" });
    }
    catch (error) {
        return res.status(500).json({ Message: "Error Updating Doubt Status", error: error.message });
    }
}

export default {
    create_doubt,
    get_doubt_by_id,
    update_doubt_by_id,
    delete_doubt_by_id,
    assign_doubt_to_student,
    answer_doubt,
    update_doubt_resolve,
    get_doubt_all
};
