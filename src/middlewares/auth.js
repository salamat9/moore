import jwt from 'jsonwebtoken';
import User from '../schemas/User.js';

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Не авторизован!' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decodedToken.userId);

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден!' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Не валидный токен!' });
    }
}

export default authenticate;
