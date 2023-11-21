import User from "../../schemas/User.js";
import { InternalServerError, NotFoundError } from "../../constants/apiResponses.js";

const get = async (req, res) => {
    try {
        const { amountDeals, createdAt } = req.query;
        const filter = {
            roleName: 'Manager',
        };

        if (amountDeals) filter.amountDeals = amountDeals;
        if (createdAt) filter.createdAt = createdAt;

        const managers = await User.find(filter);

        if (!managers.length) 
            return res.status(404).json({ message: NotFoundError })
        
        return res.status(200).json({ managers });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: InternalServerError }); 
    }
};

export default get;
