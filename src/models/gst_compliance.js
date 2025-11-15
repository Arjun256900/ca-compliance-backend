import mongoose from "mongoose";

const gstComplianceSchema = new mongoose.Schema({
  complianceName: {
    type: String,
    required: true,
  },
  governingAct: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    enum: ["Monthly", "Quarterly", "Annual", "Half-yearly"],
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
});

const GSTCompliance = mongoose.model("GSTCompliance", gstComplianceSchema);

export default GSTCompliance;
