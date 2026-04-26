import { Request, Response, NextFunction } from "express";
import { InterviewNote } from "../models/interviewNote.model";
import { Application } from "../models/application.model";

export const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const applicationId = req.params.id as string;  // FIXED
    const { note, rating } = req.body;

    const app = await Application.findById(applicationId);
    if (!app) return res.status(404).json({ message: "Application not found" });

    const interviewNote = await InterviewNote.create({
      application: applicationId,
      note,
      rating
    });

    return res.status(201).json(interviewNote);
  } catch (err) {
    return next(err);
  }
};

export const getNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const applicationId = req.params.id as string;  // FIXED

    const notes = await InterviewNote.find({ application: applicationId })
      .sort({ created_at: -1 });

    return res.json(notes);
  } catch (err) {
    return next(err);
  }
};
