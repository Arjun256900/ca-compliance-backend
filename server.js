import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js";
import gstComplianceRoutes from "./src/routes/gst_compliance.route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/gstCompliance", gstComplianceRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the app if DB connection fails
  }
};

// Actually starting the server
startServer();
