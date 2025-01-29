import { Request, Response } from "express";

export const getInfo = (req: Request, res: Response) => {
  const response = {
    email: "philipokedi@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/fellipxd/hng_backend_task_0",
  };

  res.status(200).json(response);
};
