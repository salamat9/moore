import User from '../../schemas/User.js';
import { InternalServerError } from "../../constants/apiResponses.js";

const create = async (req, res) => {
    try {
        const newManager = new User(req.body)
        const savedManager = await newManager.save();
        
        res.status(201).json(savedManager);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: InternalServerError }); 
    }
}

export default create;
