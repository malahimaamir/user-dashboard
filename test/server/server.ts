import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/uploads", express.static("uploads"));

app.post("/api/admin/login", (req, res) => {
  const { password } = req.body;
  if (password === "1234") {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: "Invalid password" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
