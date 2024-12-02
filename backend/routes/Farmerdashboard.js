// import express from "express";
// import User from "../models/User.js";
// import { requireAuth } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.get("/dashboard",requireAuth,async(req,res)=>{
//     try{
//         const farmerId = req.user.id;// Extracted from the token in requireAuth middleware
//         console.log("Decoded Farmer ID:", farmerId);

//         const farmer = await User.findById({ $or: [
            
//             { email: { $regex: new RegExp(`^${email}$`, 'i') } }
//           ]}).select("-password");
//         if(!farmer){
//             return res.status(404).json({message:"Farmer not found"});
//                 }

//                 res.status(200).json(farmer);

//     }
//     catch(error){
//         console.log("error fetching farmer data:",error);
//         res.status(500).json({message:"server error while fetching Farmer data"});
//     }
// });
// export default router;


import express from "express";
import User from "../models/User.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/dashboard", requireAuth, async (req, res) => {
  try {
    // Extract farmer ID from the decoded token in requireAuth middleware
    const farmerId = req.user.id;
    console.log("Decoded Farmer ID:", farmerId);

    // Find the farmer by ID (not email or other fields, as findById only accepts an ID)
    const farmer = await User.findById(farmerId).select("-password");

    // Check if the farmer exists
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    // Respond with the farmer's data
    res.status(200).json(farmer);
  } catch (error) {
    console.error("Error fetching farmer data:", error);
    res.status(500).json({ 
      message: "Server error while fetching farmer data",
      error: error.message  });
  }
});

export default router;
