import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { getInfo } from "./controllers/apiController";

const app = express();
const port = 5000;

// Middleware
app.use(cors());

// Route
app.get("/userDetails", getInfo);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
