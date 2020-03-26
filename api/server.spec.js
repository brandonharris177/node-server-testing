const request = require('supertest');

const server = require("./server")

describe("server.js", function() {
    describe("GET /", function() {
      it("should return 200 OK", function() {
        request(server)
          .get("/")
          .expect(200)
      });
      it.todo("should return JSON");
      it.todo('should respond with { api: "up" }');
    });
  });