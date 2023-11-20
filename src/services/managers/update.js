import User from "../../schemas/User.js";
import { isValidId } from "../../utils/validate.js";
import { InvalidIdError, NotFoundError } from "../../constants/apiResponses.js";

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, surName, phone, email } = req.body;

        if (!isValidId(id)) {
            return res.status(400).json({ error: InvalidIdError });
        }

        const updatedManager = await User.findByIdAndUpdate(
            id,
            {
                $set: {
                    firstName, lastName, surName, phone, email
                },
            },
            { new: true },
        );

        if (!updatedManager) {
            return res.status(404).json({ error: NotFoundError });
        }
        return res.status(201).json({ data: updatedManager })
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).json({ error: InternalServerError });
    }
}

export default update;
