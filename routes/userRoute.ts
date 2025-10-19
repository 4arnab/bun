import { Elysia } from "elysia";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/userController";

export const userRoute = new Elysia({ prefix: "/users" })
  .get("/", getUsers)
  .get("/:id", ({ params }) => {
    const id = Number(params.id);
    return getUserById(id);
  })
  .post("/", ({ body }) => {
    const { name, age } = body as { name: string; age: number };
    return createUser(name, age);
  });
