"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = exports.getApplications = exports.createApplication = void 0;
const application_model_1 = require("../models/application.model");
const candidate_model_1 = require("../models/candidate.model");
const interviewNote_model_1 = require("../models/interviewNote.model");
const createApplication = async (req, res, next) => {
    try {
        const { candidate, position, status, source } = req.body;
        const candidateExists = await candidate_model_1.Candidate.findById(candidate);
        if (!candidateExists) {
            return res.status(400).json({ message: "Candidate not found" });
        }
        const application = await application_model_1.Application.create({ candidate, position, status, source });
        return res.status(201).json(application);
    }
    catch (err) {
        return next(err);
    }
};
exports.createApplication = createApplication;
const getApplications = async (req, res, next) => {
    try {
        const filter = {};
        if (req.query.status)
            filter.status = req.query.status;
        const apps = await application_model_1.Application.find(filter)
            .populate("candidate")
            .sort({ applied_at: -1 });
        return res.json(apps);
    }
    catch (err) {
        return next(err);
    }
};
exports.getApplications = getApplications;
const getSummary = async (_req, res, next) => {
    try {
        const totalCandidates = await candidate_model_1.Candidate.countDocuments();
        const totalApplications = await application_model_1.Application.countDocuments();
        const byStatus = await application_model_1.Application.aggregate([
            { $group: { _id: "$status", count: { $sum: 1 } } }
        ]);
        const avgRating = await interviewNote_model_1.InterviewNote.aggregate([
            { $group: { _id: null, avgRating: { $avg: "$rating" } } }
        ]);
        return res.json({
            totalCandidates,
            totalApplications,
            byStatus,
            averageRating: avgRating[0]?.avgRating ?? null
        });
    }
    catch (err) {
        return next(err);
    }
};
exports.getSummary = getSummary;
