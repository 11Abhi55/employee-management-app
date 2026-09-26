const request = require("supertest");
const app = require("../../server");

describe("Employee API", () => {

    test("GET /api/employees should return employees", async () => {

        const response = await request(app)
            .get("/api/employees");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

    });

    test("POST /api/employees should create employee", async () => {

        const response = await request(app)
            .post("/api/employees")
            .send({
                name: "Test User",
                role: "Developer"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe("Test User");

    });

});