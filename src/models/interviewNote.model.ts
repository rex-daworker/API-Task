import mongoose, { Schema, Document, Types } from "mongoose";

export interface IInterviewNote extends Document {
  application: Types.ObjectId;
  note?: string;
  rating: number;
  created_at: Date;
}

const InterviewNoteSchema = new Schema<IInterviewNote>({
  application: { type: Schema.Types.ObjectId, ref: "Application", required: true },
  note: String,
  rating: { type: Number, min: 1, max: 5, required: true },
  created_at: { type: Date, default: Date.now }
});

export const InterviewNote = mongoose.model<IInterviewNote>("InterviewNote", InterviewNoteSchema);
