import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, process.env.JWT_SECRET); // ✅ corrected: proccess → process
    next();
  } catch (error) {
    res.json({ success: false, message: "Invalid token" });
  }
};

export default auth;
