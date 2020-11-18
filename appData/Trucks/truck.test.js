const request = require("supertest");
const server = require("./server.js");

const db = require("../../database/connection.js");
const Truck = require("./truck-model.js");

beforeEach(async () => {
  await db("trucks").truncate();
});

describe("server.js", () => {
  describe("index route", () => {
    it("OK status code", async () => {
      const statCode = 200;
      const response = await request(server).get("/");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON ", async () => {
      const response = await request(server).get("/");
      expect(response.type).toEqual("application/json");
    });
  });
});
