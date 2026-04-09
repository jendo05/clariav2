const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.get ("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT ||5000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

const authRoutes= require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

const protect = require("./middleware/authMiddleware");

app.get("/api/protected", protect, (req, res) => {
  res.json({
    msg: "Access granted",
    user: req.user
  });
});