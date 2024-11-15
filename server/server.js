import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

 mongoose.connect(process.env.MONGO_URI)
//{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,  
// }
.then(()=>{
    console.log("Mongo URI:", process.env.MONGO_URI); // Debugging line

    console.log("Mongo Database is conneceted");
})
.catch((error)=>{
    console.log("Mongo URI:", process.env.MONGO_URI); // Debugging line

    console.log(`Mongo Database is not conneceted ${error}`);   
})

app.get('/test', (req, res) => {
    res.send('Test route works!');
});

app.get('/',(req,res)=>{
    console.log('server is connected');
    res.send('Welcome to the Farmers Market API');
})

import cropRoutes from './routes/crop.js';
app.use('/api/crops', cropRoutes);

import allCropsRoutes from './routes/allCrops.js'; // Ensure the correct path
app.use('/api/crops', allCropsRoutes);

import authRoutes from './routes/auth.js';
app.use('/api/farmer', authRoutes);


import cauthRoutes from './routes/cauth.js';
app.use('/api/customer', cauthRoutes);


import customerDemandRoutes from './routes/customerDemand.js';
app.use('/api/customerDemand',customerDemandRoutes);

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
});