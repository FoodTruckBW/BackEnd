const request = require("supertest");
const server = require("../../auth/api/server");

describe("server.js", () => {
  describe("Index Check on /", () => {
    it("OK status code", async () => {
      const statCode = 200;
      const res = await request(server).get("/");
      expect(res.status).toEqual(statCode);
    });
  });
  describe("Index Check on GET /api/trucks", () => {
    it("OK status code for Trucks", async () => {
      const statCode = 200;
      const res = await request(server).get("/api/trucks");
      expect(res.status).toEqual(statCode);
    });

    it("trucks should return object", async () => {
      const res = await request(server).get("/api/trucks");
      expect(res.body[0]).toHaveProperty("Location");
      expect(res.body[0]).toHaveProperty("arrivalTime");
      expect(res.body[0]).toHaveProperty("Name");
      expect(res.body[0]).toHaveProperty("cuisineType");
      expect(res.body[0]).toHaveProperty("departureTime");
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("imageURL");
    });
  });
  describe("GET Trucks at ID", () => {
    it("trucks at ID:1 should return object", async () => {
      const res = await request(server).get("/api/trucks/1");
      expect(res.body).toHaveProperty("Location");
      expect(res.body).toHaveProperty("arrivalTime");
      expect(res.body).toHaveProperty("Name");
      expect(res.body).toHaveProperty("cuisineType");
      expect(res.body).toHaveProperty("departureTime");
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("TruckId");
      expect(res.body).toHaveProperty("imageURL");
      expect(res.body).toHaveProperty("ratingAVG");
    });

    it("trucks at ID:2 should return object", async () => {
      const res = await request(server).get("/api/trucks/2");
      expect(res.body).toHaveProperty("Location");
      expect(res.body).toHaveProperty("arrivalTime");
      expect(res.body).toHaveProperty("Name");
      expect(res.body).toHaveProperty("cuisineType");
      expect(res.body).toHaveProperty("departureTime");
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("TruckId");
      expect(res.body).toHaveProperty("imageURL");
      expect(res.body).toHaveProperty("ratingAVG");
    });
  });
  describe("Trucks at ID getting ratings", () => {
    it("trucks at ID:1 getting ratings should return object", async () => {
      const res = await request(server).get("/api/trucks/1/rate");
      expect(res.body[0]).toHaveProperty("rating");
      expect(res.body[0]).toHaveProperty("TruckId");
    });
  });
  describe("PUT Trucks at ID", () => {
    it("Fail to find item", async () => {
      const data = { Name: "JestTest" };
      const statCode = 404;
      const res = await request(server).put("/api/trucks/1000000").send(data);
      expect(res.status).toEqual(statCode);
    });
    it("trucks at ID:3 put should return object", async () => {
      const data = {
        Name: "JestTest",
        imageURL: "test.com",
        cuisineType: "testFood",
      };
      const res = await request(server).put("/api/trucks/3").send(data);
      expect(res.body[0]).toHaveProperty("Name", data.Name);
      expect(res.body[0]).toHaveProperty("imageURL", data.imageURL);
      expect(res.body[0]).toHaveProperty("cuisineType", data.cuisineType);
    });
  });
  describe("POST Trucks", () => {
    it("Posting new truck", async () => {
      const temp = Math.random().toString();
      const data = {
        Name: temp,
        imageURL: "testing.com",
        cuisineType: "Eggs",
      };
      const res = await request(server).post("/api/trucks").send(data);
      expect(res.body[0]).toHaveProperty("Name", data.Name);
      expect(res.body[0]).toHaveProperty("imageURL", data.imageURL);
      expect(res.body[0]).toHaveProperty("cuisineType", data.cuisineType);
    });
  });
  describe("DEL Trucks", () => {
    it("Delete truck", async () => {
      const temp = Math.random().toString();
      const data = {
        Name: temp,
        imageURL: "testing.com",
        cuisineType: "Eggs",
      };
      const statCode = 200;
      const res = await request(server).post("/api/trucks").send(data);
      expect(res.status).toEqual(statCode + 1);
      const delRes = await request(server).delete(
        `/api/trucks/${res.body[0].id}`
      );
      expect(delRes.status).toEqual(statCode);
    });
  });
});
