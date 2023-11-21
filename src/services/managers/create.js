import User from '../../schemas/User.js';
import bcrypt from 'bcrypt';
import { InternalServerError } from "../../constants/apiResponses.js";

const create = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isTakenEmail = await User.findOne({ email });
        
        if (isTakenEmail) 
            return res.status(400).json({ email: "Email already taken!"});
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);    
        const newManager = new User({ email, password: hashedPassword, roleName: 'Manager' });
        const savedManager = await newManager.save();
        
        res.status(201).json(savedManager);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: InternalServerError }); 
    }
}

export default create;
