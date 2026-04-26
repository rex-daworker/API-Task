import mongoose, { Schema, Document } from "mongoose";

export interface ICandidate extends Document {
  full_name: string;
  email: string;
  phone?: string;
  years_of_experience?: number;
  primary_skill?: string;
  created_at: Date;
}

const CandidateSchema = new Schema<ICandidate>({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  years_of_experience: Number,
  primary_skill: String,
  created_at: { type: Date, default: Date.now }
});

export const Candidate = mongoose.model<ICandidate>("Candidate", CandidateSchema);
