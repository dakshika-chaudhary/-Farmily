
import express from 'express';
//to add multiple images we should use multer
import multer from 'multer';
import Crop from '../models/Crop.js'; 
// import bcrypt from 'bcryptjs';
const router = express.Router();



// Multer setup for multiple file uploads
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        //cb is a call back function
        cb(null,'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage });

router.post('/add',upload.array('images',5), async (req, res) => {
    try {
        console.log("Incoming crop data:", req.body);

        const { name, price, description,quantity, type } = req.body;
         console.log(`name is : ${name}`)
        const farmerId = req.headers.farmerId || req.body.farmerId;
        console.log(`Farmer ID is : ${farmerId}`);
        if (!farmerId) {
            console.error('Farmer ID is missing!');
            return res.status(400).json({ message: 'Farmer ID is missing!' });
        }
       
        // Check for missing fields
        if (!name || !price || !description  || !quantity || !type || !farmerId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

       const imagePaths = req.files.map(file => file.path);

        // Optionally set addedBy to null if you don't want to store who added the crop
        const newCrop = new Crop({
            name,
            price,
            description,
             //to convert it to boolean from string
            quantity,
            type,
            farmerId,
            images: imagePaths,
            addedBy: null, // or omit this line completely
        });

        const savedCrop = await newCrop.save();

        res.status(201).json(savedCrop);
        console.log(`Added crop: ${savedCrop}`);
    } catch (error) {
        console.error('Error adding crop:', error);
        res.status(500).json({ message: 'Error adding crop', error });
    }
});


export default router;