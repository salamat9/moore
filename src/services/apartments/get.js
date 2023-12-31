import Apartment from "../../schemas/Apartment.js";
import { InternalServerError, NotFoundError } from "../../constants/apiResponses.js";

const get = async (req, res) => {
    try {
        const { status, buildingId } = req.query;
        const filter = {};

        if (status) filter.status = status;
        if (buildingId) filter.building = buildingId;

        const apartments = await Apartment.find(filter).populate('building', 'name').populate('clients', 'firstName lastName').exec();
        
        if (!apartments.length) 
            return res.status(404).json({ message: NotFoundError });
        
        return res.status(200).json({ apartments });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: InternalServerError }); 
    }
};

export default get;
