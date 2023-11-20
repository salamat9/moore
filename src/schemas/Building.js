import mongoose from "mongoose";

const BuildingSchema = new mongoose.Schema({
    name: String,
    apartments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Apartment',
        },
    ],
}, {
    timestamps: true,
});

const Building = mongoose.model('Building', BuildingSchema);

export default Building;
