import bcrypt from 'bcrypt';
import User from '../../schemas/User.js';
import { InternalServerError } from '../../constants/apiResponses.js';

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isTakenEmail = await User.findOne({ email });

        if (isTakenEmail) 
            return res.status(400).json({ email: "Email already taken!"});

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({ email, password: hashedPassword });
        const savedUser = await user.save();

        res.status(201).json({ data: savedUser });
    } catch (err) {
        console.log('Error:', err)
        res.status(500).json({ message: InternalServerError});
    }
}

export default register;
