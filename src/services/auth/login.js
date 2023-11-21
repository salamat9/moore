import jwt from 'jsonwebtoken';
import User from '../../schemas/User.js';
import { InternalServerError } from '../../constants/apiResponses.js';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) 
            return res.status(404).json({ message: 'Пользователь не найден!' });

        const isInvalidPassword = await user.comparePassword(password);

        if (isInvalidPassword)
            return res.status(401).json({ message: 'Невалидные данные!' })

        const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_KEY, {
            expiresIn: '7d',
        })
        user.refreshToken = refreshToken;
        await user.save();
        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1 hour',
        });

        return res.status(201).json({ accessToken, refreshToken })
    } catch (err) {
        return res.status(500).json({ message: InternalServerError});
    }
}

export default login;
