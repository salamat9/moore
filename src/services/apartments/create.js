import Apartment from "../../schemas/Apartment.js";
import { InternalServerError } from "../../constants/apiResponses.js";

const create = async (req, res) => {
    try {
        const newApartment = new Apartment(req.body)
        const savedApartment = await newApartment.save();
        
        res.status(201).json(savedApartment);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: InternalServerError }); 
    }
};

export default create;
