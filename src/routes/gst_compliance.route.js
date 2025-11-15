import express from "express";
import GSTCompliance from "../models/gst_compliance.js";
const router = express.Router();

// Add GST Compliance Data
router.post("/add", async (req, res) => {
  const { complianceName, governingAct, frequency, dueDate } = req.body;

  try {
    const newCompliance = new GSTCompliance({
      complianceName,
      governingAct,
      frequency,
      dueDate,
    });

    await newCompliance.save();
    res.status(201).json({
      message: "GST compliance data added successfully.",
      compliance: newCompliance,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Get All GST Compliance Data
router.get("/all", async (req, res) => {
  try {
    const complianceData = await GSTCompliance.find();
    res.status(200).json({ complianceData });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Filter GST Compliance Data by Frequency
router.get("/filter", async (req, res) => {
  const { frequency } = req.query;

  try {
    const filteredData = await GSTCompliance.find({ frequency });
    res.status(200).json({ filteredData });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
