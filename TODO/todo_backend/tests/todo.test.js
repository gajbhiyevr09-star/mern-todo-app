const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

describe("Todo API Integration Tests", () => {

    let todoId;

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("POST /add - should create a new todo", async () => {

        const res = await request(app)
            .post("/add")
            .send({
                task: "Jest Assignment Todo"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.task).toBe("Jest Assignment Todo");
        expect(res.body.done).toBe(false);

        todoId = res.body._id;

    });

    test("GET /get - should return todo list", async () => {

        const res = await request(app)
            .get("/get");

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);

    });

    test("PUT /update/:id - should update todo text", async () => {

        const res = await request(app)
            .put(`/update/${todoId}`)
            .send({
                task: "Updated by Jest"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.task).toBe("Updated by Jest");

    });

    test("PUT /edit/:id - should mark todo completed", async () => {

        const res = await request(app)
            .put(`/edit/${todoId}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.done).toBe(true);

    });

    test("DELETE /delete/:id - should delete todo", async () => {

        const res = await request(app)
            .delete(`/delete/${todoId}`);

        expect(res.statusCode).toBe(200);

    });

});