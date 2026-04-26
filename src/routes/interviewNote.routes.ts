import { Router } from "express";
import { createNote, getNotes } from "../controllers/interviewNote.controller";
import { validateObjectId } from "../middleware/validateObjectId";

const router = Router();

// POST /api/applications/:id/notes
router.post("/applications/:id/notes", validateObjectId, createNote);

// GET /api/applications/:id/notes
router.get("/applications/:id/notes", validateObjectId, getNotes);

export default router;
