import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: { 
        type: String, 
        required: true 
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{ 
        type: String 
    }],
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
}, { timestamps: true });

const Crop = mongoose.model('Crop', cropSchema);
export default Crop;