// import express from 'express';
// import Crop from '../models/Crop.js';

// const router = express.Router();

// router.get('/all',async (req,res)=>{
//     try{
//         //to find all the added crops by farmers
//     const crops = await Crop.find().populate('addedBy','firstName lastName');
//     res.status(200).json(crops);
// }
// catch(error){
//     console.error('Error fetching crops:', error);
//     res.status(500).json({ message: 'Server error' });
// }
// });

// export default router;


import express from 'express';
import Crop from '../models/Crop.js';


const router = express.Router();

// Route for fetching all crops
router.get('/all', async (req, res) => {
    
    const { type } = req.query;

    try {  
let query = {};
if(type){
    query.type = type;

}
const crops = await Crop.find(query);
res.status(200).json(crops);
    } 
    catch (error) {
        console.error('Error fetching crops:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router; // Make sure to export the router
