import Building from "../../schemas/Building.js";
import { InternalServerError, NotFoundError } from "../../constants/apiResponses.js";

const get = async (req, res) => {
    try {
        const buildings = await Building.find();

        if (!buildings.length)
            return res.status(404).json({ message: NotFoundError });

        return res.status(200).json({ buildings });    
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: InternalServerError });
    }
}

export default get;
