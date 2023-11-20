import { InternalServerError } from "../../constants/apiResponses.js";
import Apartment from "../../schemas/Apartment.js";

const get = async (req, res) => {
    try {
        const { status } = req.query;
        const filter = {};

        if (status) filter.status = status;

        const apartments = await Apartment.find(filter);

        if (!apartments.length) 
            return res.status(404).json({ message: '' })
        
        return res.status(200).json({ data: apartments });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: InternalServerError }); 
    }
};

export default get;
