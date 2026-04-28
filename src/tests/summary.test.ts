import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import { connectDB } from "../config/db";

describe("Summary API", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  test("Summary endpoint returns correct structure", async () => {
    const res = await request(app).get("/api/summary");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("totalCandidates");
    expect(res.body).toHaveProperty("totalApplications");
    expect(res.body).toHaveProperty("byStatus");
    expect(res.body).toHaveProperty("averageRating");
  });
});
