import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/BlogRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("✅ API is Working on Vercel"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// Connect DB before export
await connectDB();

// ✅ Export instead of listen (Vercel handles this automatically)
export default app;
