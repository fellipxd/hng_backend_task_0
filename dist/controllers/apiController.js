"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = void 0;
const getInfo = (req, res) => {
    const response = {
        email: "philipokedis@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/fellipxd/hng_backend_task_0",
    };
    res.status(200).json(response);
};
exports.getInfo = getInfo;
