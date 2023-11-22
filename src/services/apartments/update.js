import Apartment from "../../schemas/Apartment.js";
import { isValidId } from "../../utils/validate.js";
import { InvalidIdError, NotFoundError } from "../../constants/apiResponses.js";

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { number, floor, square, price, status, description, clients, building } = req.body;

        if (!isValidId(id)) {
            return res.status(400).json({ error: InvalidIdError });
        }

        const updatedApartment = await Apartment.findByIdAndUpdate(
            id,
            {
                $set: {
                    number,
                    floor,
                    square,
                    price,
                    status,
                    description,
                    clients,
                    building,
                },
            },
            { new: true },
        );

        if (!updatedApartment) {
            return res.status(404).json({ error: NotFoundError });
        }
        return res.status(201).json({ data: updatedApartment })
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).json({ error: InternalServerError });
    }
}

export default update;
