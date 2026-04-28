import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import { connectDB } from "../config/db";

describe("Application API", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  let candidateId: string;
  let applicationId: string;

  test("Create candidate first", async () => {
    const res = await request(app)
      .post("/api/candidates")
      .send({
        full_name: "Jane Doe",
        email: "jane@example.com",
        phone: "9876543210",
        years_of_experience: 5,
        primary_skill: "React",
      });

    candidateId = res.body._id;
  });

  test("Create application", async () => {
    const res = await request(app)
      .post("/api/applications")
      .send({
        candidate: candidateId,
        position: "Backend Developer",
        status: "applied",
        source: "LinkedIn",
      });

    expect(res.status).toBe(201);
    applicationId = res.body._id;
  });

  test("Get all applications", async () => {
    const res = await request(app).get("/api/applications");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
