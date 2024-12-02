import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'CUser',
    required:true
   },
   crops:[
    {
        cropId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Crops',
            required:true
        }, 
        quantity:{
            type:Number,
            default:1
        }
    }
   ],

   orderAt:{
      type:Date,
      default:Date.now
   },

})

module.exports = mongoose.model('Order', orderSchema);