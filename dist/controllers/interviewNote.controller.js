"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = exports.createNote = void 0;
const interviewNote_model_1 = require("../models/interviewNote.model");
const application_model_1 = require("../models/application.model");
const createNote = async (req, res, next) => {
    try {
        const applicationId = req.params.id;
        const { note, rating } = req.body;
        const app = await application_model_1.Application.findById(applicationId);
        if (!app)
            return res.status(404).json({ message: "Application not found" });
        const interviewNote = await interviewNote_model_1.InterviewNote.create({ application: applicationId, note, rating });
        return res.status(201).json(interviewNote);
    }
    catch (err) {
        return next(err);
    }
};
exports.createNote = createNote;
const getNotes = async (req, res, next) => {
    try {
        const notes = await interviewNote_model_1.InterviewNote.find({ application: req.params.id }).sort({ created_at: -1 });
        return res.json(notes);
    }
    catch (err) {
        return next(err);
    }
};
exports.getNotes = getNotes;
