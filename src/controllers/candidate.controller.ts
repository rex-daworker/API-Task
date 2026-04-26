import { Request, Response, NextFunction } from "express";
import { Candidate } from "../models/candidate.model";

export const createCandidate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const candidate = await Candidate.create(req.body);
    return res.status(201).json(candidate);
  } catch (err) {
    return next(err);
  }
};

export const getCandidates = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const candidates = await Candidate.find().sort({ created_at: -1 });
    return res.json(candidates);
  } catch (err) {
    return next(err);
  }
};
