import { NotFoundError } from "elysia";
import { prisma } from "../db/prisma.db";

const users = [
  { id: 1, name: "Ahmed", age: 20 },
  { id: 2, name: "Alia", age: 24 },
];

// Controller functions
export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      _count: true,
    },
  });
  if (!users.length) throw new NotFoundError("Users not found");
  return users;
};

export const getUserById = (id: number) => {
  const user = users.find((u) => u.id === id);
  if (!user) return { message: "User not found", code: 404 };
  return user;
};

export const createUser = (name: string, age: number) => {
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  return newUser;
};
