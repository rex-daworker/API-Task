"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const candidate_routes_1 = __importDefault(require("./routes/candidate.routes"));
const application_routes_1 = __importDefault(require("./routes/application.routes"));
const interviewNote_routes_1 = __importDefault(require("./routes/interviewNote.routes"));
const errorHandler_1 = require("./middleware/errorHandler");
const application_controller_1 = require("./controllers/application.controller");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/candidates", candidate_routes_1.default);
app.use("/api/applications", application_routes_1.default);
app.use("/api", interviewNote_routes_1.default); // gives /api/applications/:id/notes
app.get("/api/summary", application_controller_1.getSummary);
app.use(errorHandler_1.errorHandler);
exports.default = app;
