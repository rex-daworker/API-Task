import express from "express";
import dotenv from "dotenv";
import candidateRoutes from "./routes/candidate.routes";
import applicationRoutes from "./routes/application.routes";
import interviewNoteRoutes from "./routes/interviewNote.routes";
import { errorHandler } from "./middleware/errorHandler";
import { getSummary } from "./controllers/application.controller";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/candidates", candidateRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api", interviewNoteRoutes); // gives /api/applications/:id/notes

app.get("/api/summary", getSummary);

app.use(errorHandler);

export default app;
