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
    sold:{
        type:Boolean,
        default:false,
    },
    farmerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:false,
    },
    images: [{ 
        type: String 
    }],
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
}, { timestamps: true });

const Crop = mongoose.model('Crop', cropSchema);
export default Crop;
