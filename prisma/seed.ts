import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Ahmed", email: "axmedarnab3@gmail.com", password: "123" },
      { name: "usama", email: "osamaahamed@gmail.com", password: "123" },
    ],
  });

  console.log("Database seed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
