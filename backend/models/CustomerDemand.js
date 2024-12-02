// models/CustomerDemand.js
import mongoose from "mongoose";

const customerDemandSchema = new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CUser',
        required:true,
    },
    crop:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    price:{
        type:Number,
        required:false,
    },
}, { timestamps: true }
);

export default mongoose.model('CustomerDemand',customerDemandSchema);