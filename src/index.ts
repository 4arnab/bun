import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { userRoute } from "./routes/user.route";
import { userErrorHandler } from "./middlewares/error.middleware";
import { useLogger } from "./middlewares/logger";

const swaggerConfig = {
  documentation: {
    info: {
      title: "My bun + alysia API",
      version: "1.0.0",
      description: "This is just testing and learning purpose",
    },
    servers: [{ url: "http://localhost:9000", description: "Local Server" }],
  },
  path: "/swagger",
};
const app = new Elysia().use(cors()).use(swagger(swaggerConfig));

userErrorHandler(app);
useLogger(app);

app.group("/api", (app) => app.use(userRoute));

const PORT = Bun.env.PORT || 3000;

app.get("/", () => "Hello from Elysia + Bun!");

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// const server = Bun.serve({
//   routes: {
//     "/api/status": {
//       GET: (req) =>
//         Response.json({
//           url: req.url,
//           headers: req.headers,
//           cookies: req.cookies,
//           anything: req.blob(),
//           items: dummyData.length,
//           users: dummyData,
//         }),
//       POST: async (req) => {
//         const body = await req.body?.json();
//         if (!body)
//           return Response.json({
//             status: 404,
//             message: "Please fill in the blanks",
//           });

//         dummyData.push(body);
//         return Response.json({ created: true, body });
//       },
//     },
//   },
//   port: 3000,
//   fetch(req) {
//     const body = figlet.textSync("From the server");
//     return new Response(body);
//   },
// });
