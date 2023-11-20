import { InternalServerError, InvalidIdError, NotFoundError } from "../../constants/apiResponses.js";
import Apartment from "../../schemas/Apartment.js";
import { isValidId } from "../../utils/validate.js";

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ error: InvalidIdError });
        }

        const deletedApartment = await Apartment.findByIdAndDelete(id);

        if (!deletedApartment) {
            return res.status(404).json({ error: NotFoundError });
        }

        res.json({ message: SuccessDelete });
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).json({ error: InternalServerError });
    }
};

export default remove;
