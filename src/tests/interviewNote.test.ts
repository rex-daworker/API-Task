import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import { connectDB } from "../config/db";

describe("Interview Notes API", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  let candidateId: string;
  let applicationId: string;

  test("Create candidate", async () => {
    const res = await request(app)
      .post("/api/candidates")
      .send({
        full_name: "Test User",
        email: "test@example.com",
        phone: "1112223333",
        years_of_experience: 2,
        primary_skill: "Python",
      });

    candidateId = res.body._id;
  });

  test("Create application", async () => {
    const res = await request(app)
      .post("/api/applications")
      .send({
        candidate: candidateId,
        position: "QA Engineer",
        status: "applied",
        source: "Indeed",
      });

    applicationId = res.body._id;
  });

  test("Add interview note", async () => {
    const res = await request(app)
      .post(`/api/applications/${applicationId}/notes`)
      .send({
        note: "Strong analytical skills",
        rating: 4,
      });

    expect(res.status).toBe(201);
    expect(res.body._id).toBeDefined();
  });

  test("Get interview notes", async () => {
    const res = await request(app).get(
      `/api/applications/${applicationId}/notes`
    );

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
