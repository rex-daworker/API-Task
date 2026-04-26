"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interviewNote_controller_1 = require("../controllers/interviewNote.controller");
const validateObjectId_1 = require("../middleware/validateObjectId");
const router = (0, express_1.Router)();
// POST /api/applications/:id/notes
router.post("/applications/:id/notes", validateObjectId_1.validateObjectId, interviewNote_controller_1.createNote);
// GET /api/applications/:id/notes
router.get("/applications/:id/notes", validateObjectId_1.validateObjectId, interviewNote_controller_1.getNotes);
exports.default = router;
