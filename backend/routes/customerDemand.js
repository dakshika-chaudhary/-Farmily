import express from 'express';
import CustomerDemand from '../models/CustomerDemand.js';
// import CUser from '../models/CUser.js';
const router = express.Router();

router.post('/demand',async(req,res) => {

    const{customerId,crop,quantity,date,price} = req.body;
    try{
        if (!customerId || !mongoose.Types.ObjectId.isValid(customerId)) {
            return res.status(400).json({ message: 'Invalid or missing customerId' });
        }

        const newDemand = new CustomerDemand({
            customerId,
            crop,
            quantity,
            date,
            price,
        });

        await newDemand.save();
        res.status(200).json({message:'Demand submitted successfully'});

    }
    catch (error) {
        console.error('Error submitting demand:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;