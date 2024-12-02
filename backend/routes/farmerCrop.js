'use client'
import express from 'express';
import Crop from "../models/Crop.js";


//a middleware is required to checkout the farmer is sign in to get the crops or not signed in
import requireSignIn from '../middleware/requireSignIn.js';

const router = express.Router();

router.get('/profilefarmer/farmercrops',requireSignIn,async(req,res)=>{
    console.log('User ID:', req.user.id);
    try{
        const crops =  await Crop.find({farmerId:req.user.id});
        console.log('Fetched Crops:', crops);
        res.status(200).json(crops);

    }
    catch(error){
        console.error('Error fetching crops:', error); 
        res.status(500).json({message:'Server error'});
    }
}
);

export default router;




