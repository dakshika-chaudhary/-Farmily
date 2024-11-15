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

//To filter crops based on their types in your Express route, you can add a query parameter to your request
        //as in URLS we can see the query option ?query=
        const query={};

        if(type){
            query.type = type; 
        }

        const crops = await Crop.find(query).populate('addedBy');
        res.status(200).json(crops);
    } 
    catch (error) {
        console.error('Error fetching crops:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router; // Make sure to export the router
