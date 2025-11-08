import request from "supertest";
import app from "../app.js";

test("GET / must respond 200", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});
