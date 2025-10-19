const users = [
  { id: 1, name: "Ahmed", age: 20 },
  { id: 2, name: "Alia", age: 24 },
];

// Controller functions
export const getUsers = () => {
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
