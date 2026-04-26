"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCandidates = exports.createCandidate = void 0;
const candidate_model_1 = require("../models/candidate.model");
const createCandidate = async (req, res, next) => {
    try {
        const candidate = await candidate_model_1.Candidate.create(req.body);
        return res.status(201).json(candidate);
    }
    catch (err) {
        return next(err);
    }
};
exports.createCandidate = createCandidate;
const getCandidates = async (_req, res, next) => {
    try {
        const candidates = await candidate_model_1.Candidate.find().sort({ created_at: -1 });
        return res.json(candidates);
    }
    catch (err) {
        return next(err);
    }
};
exports.getCandidates = getCandidates;
