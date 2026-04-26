import { Router } from "express";
import { createApplication, getApplications } from "../controllers/application.controller";
import { createNote, getNotes } from "../controllers/interviewNote.controller";
import { validateObjectId } from "../middleware/validateObjectId";

const router = Router();

router.post("/", createApplication);
router.get("/", getApplications);

router.post("/:id/notes", validateObjectId, createNote);
router.get("/:id/notes", validateObjectId, getNotes);

export default router;
