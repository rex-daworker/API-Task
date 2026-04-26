import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  if (err.code === 11000) {
    return res.status(409).json({ message: "Duplicate key error" });
  }

  return res.status(500).json({ message: err.message || "Internal server error" });
};
