
import express from "express";
import CUser from "../models/CUser.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/cdashboard", requireAuth, async (req, res) => {
  try {
    // Extract farmer ID from the decoded token in requireAuth middleware
    const customerId = req.user.id;
    console.log("Decoded Customer ID:", customerId);

    // Find the customer by ID (not email or other fields, as findById only accepts an ID)
    const customer = await CUser.findById(customerId).select("-password");

    // Check if the customer exists
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Respond with the customer's data
    res.status(200).json(customer);
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).json({ message: "Server error while fetching customer data" });
  }
});

export default router;
