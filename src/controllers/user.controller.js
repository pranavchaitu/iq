import User from '../models/user.model.js';


// create a user
const create_user = async (req, res) => {
    const {
        username,
        avatar,
        email,
        password
    } = req.body;
    try{
        const user = new User({
            username,
            avatar,
            email,
            password
        });
        await user.save();
        return res.status(201).json({messege : "User created successfully" , data : user}); ;
    }catch(err){
        return res.status(400).json({messege : "User creation failed" , error : err.message});
    }

}

const create_user_all = async (req, res) => {
    const users = req.body;
    try{
        await User.insertMany(users);
        return res.status(201).json({messege : "Users created successfully" , data : users}); ;
    }catch(err){
        return res.status(400).json({messege : "Users creation failed" , error : err.message});
    }

}

const get_all_users = async (req, res) => {
    try{
        const users = await User.find({});
        return res.status(200).json({messege : "Users fetched successfully" , data : users}); ;
    }catch(err){
        return res.status(400).json({messege : "Users fetch failed" , error : err.message});
    }

}

const get_user_by_id = async (req, res) => {
    const {id} = req.params;
    try{
        const user = await User.findById(id);
        return res.status(200).json({messege : "User fetched successfully" , data : user}); ;
    } catch(err){
        return res.status(400).json({messege : "User fetch failed" , error : err.message});
    }
}

const update_user_by_id = async (req, res) => {
    const { id } = req.params;
    const { username, avatar, email, password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { username, avatar, email, password },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User updated successfully", data: user });
    } catch (err) {
        return res.status(400).json({ message: "User update failed", error: err.message });
    }
}

const delete_user_by_id = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully", data: user });
    } catch (err) {
        return res.status(400).json({ message: "User delete failed", error: err.message });
    }   
}

export default { 
    create_user,
    create_user_all,
    get_all_users,
    get_user_by_id,
    update_user_by_id,
    delete_user_by_id
};
