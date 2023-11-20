import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    surName: String,
    phone: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    amountDeals: Number,
    roleName: String,
}, {
    timestamps: true,
})

const User = mongoose.model('User', UserSchema);

export default User;
