import mongoose from 'mongoose';

const ApartmentSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    square: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Бронь", "Куплено", "Бартер", "Рассрочка", "Отмена", "Активна"],
    },
    description: String,
    clients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timestamps: true,
});

const Apartment = mongoose.model('Apartment', ApartmentSchema);

export default Apartment;
