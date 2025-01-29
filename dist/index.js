"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apiController_1 = require("./controllers/apiController");
const app = (0, express_1.default)();
const port = 5000;
// Middleware
app.use((0, cors_1.default)());
// Route
app.get("/userDetails", apiController_1.getInfo);
// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
