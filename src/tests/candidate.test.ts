import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import { connectDB } from "../config/db";

describe("Candidate API", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  let candidateId: string;

  test("Create a candidate", async () => {
    const res = await request(app)
      .post("/api/candidates")
      .send({
        full_name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        years_of_experience: 3,
        primary_skill: "Node.js",
      });

    expect(res.status).toBe(201);
    expect(res.body._id).toBeDefined();
    candidateId = res.body._id;
  });

  test("Get all candidates", async () => {
    const res = await request(app).get("/api/candidates");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
