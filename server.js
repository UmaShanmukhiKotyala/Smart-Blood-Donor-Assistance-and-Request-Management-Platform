const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const donorRoutes = require("./routes/donorRoutes");
const receiverRoutes=require("./routes/receiverRoutes");
dotenv.config();

const app = express();

// Middleware FIRST
app.use(cors());
app.use(express.json());
// Import Routes
const authRoutes = require("./routes/authRoutes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/donor", donorRoutes);
app.use("/api/receiver",receiverRoutes);


// MongoDB Connection

if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
    console.error("MONGO_URI or JWT_SECRET is missing. Add both to server/.env before starting the server.");
    process.exit(1);
}

// Test Route
app.get("/", (req, res) => {
    res.send("Blood Donation Assistance System Backend Running...");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    });
