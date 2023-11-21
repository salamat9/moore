import jwt from 'jsonwebtoken';
import User from '../../schemas/User.js';
import { InternalServerError } from '../../constants/apiResponses.js';

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.headers.authorization?.split(' ')[1];

        if (!refreshToken) {
            return res.status(400).json({ error: 'Refresh token is required' });
        }

        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);
        const user = await User.findOne({ _id: decoded.userId });
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1 hour',
        });

        return res.status(201).json({ accessToken, refreshToken })
    } catch (err) {
        console.log('Error:', err)
        res.status(500).json({ message: InternalServerError});
    }
}

export default refreshToken;
