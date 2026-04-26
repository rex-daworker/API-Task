import { Request, Response, NextFunction } from "express";
import { Application } from "../models/application.model";
import { Candidate } from "../models/candidate.model";
import { InterviewNote } from "../models/interviewNote.model";

export const createApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { candidate, position, status, source } = req.body;

    const candidateExists = await Candidate.findById(candidate);
    if (!candidateExists) {
      return res.status(400).json({ message: "Candidate not found" });
    }

    const application = await Application.create({ candidate, position, status, source });
    return res.status(201).json(application);
  } catch (err) {
    return next(err);
  }
};

export const getApplications = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: any = {};
    if (req.query.status) filter.status = req.query.status;

    const apps = await Application.find(filter)
      .populate("candidate")
      .sort({ applied_at: -1 });

    return res.json(apps);
  } catch (err) {
    return next(err);
  }
};

export const getSummary = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const totalCandidates = await Candidate.countDocuments();
    const totalApplications = await Application.countDocuments();

    const byStatus = await Application.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    const avgRating = await InterviewNote.aggregate([
      { $group: { _id: null, avgRating: { $avg: "$rating" } } }
    ]);

    return res.json({
      totalCandidates,
      totalApplications,
      byStatus,
      averageRating: avgRating[0]?.avgRating ?? null
    });
  } catch (err) {
    return next(err);
  }
};
