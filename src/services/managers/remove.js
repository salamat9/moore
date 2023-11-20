import User from "../../schemas/User.js";
import { isValidId } from "../../utils/validate.js";
import { InternalServerError, InvalidIdError, NotFoundError } from "../../constants/apiResponses.js";

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ error: InvalidIdError });
        }

        const deletedManager = await User.findByIdAndDelete(id);

        if (!deletedManager) {
            return res.status(404).json({ error: NotFoundError });
        }

        res.json({ message: SuccessDelete });
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).json({ error: InternalServerError });
    }
};

export default remove;
