import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/BlogRoutes.js";

const app = express();

// Connect to database
const startServer = async () => {
  await connectDB();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Routes
  app.get("/", (req, res) => res.send("API is Working"));
  app.use("/api/admin", adminRouter);
  app.use("/api/blog", blogRouter);

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log("✅ Server is running on port " + PORT);
  });
};

startServer();

export default app;
