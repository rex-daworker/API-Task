import mongoose, { Schema, Document, Types } from "mongoose";

export type ApplicationStatus =
  | "applied"
  | "screening"
  | "interview"
  | "rejected"
  | "accepted";

export interface IApplication extends Document {
  candidate: Types.ObjectId;
  position: string;
  status: ApplicationStatus;
  source?: string;
  applied_at: Date;
}

const ApplicationSchema = new Schema<IApplication>({
  candidate: { type: Schema.Types.ObjectId, ref: "Candidate", required: true },
  position: { type: String, required: true },
  status: {
    type: String,
    enum: ["applied", "screening", "interview", "rejected", "accepted"],
    required: true
  },
  source: String,
  applied_at: { type: Date, default: Date.now }
});

export const Application = mongoose.model<IApplication>("Application", ApplicationSchema);
