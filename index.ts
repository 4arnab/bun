import figlet from "figlet";
import { Elysia } from "elysia";

const dummyData = [
  { name: "Ahmed", age: 20 },
  { name: "Ahmed", age: 20 },
  { name: "Ahmed", age: 20 },
  { name: "Ahmed", age: 20 },
  { name: "Ahmed", age: 20 },
  { name: "Ahmed", age: 20 },
  { name: "Ahmed", age: 20 },
];

const app = new Elysia();
const PORT = 3000;

app.get("/", () => "Hello from Elysia + Bun!");
app.get("/api/status", (context) => {
  return {
    url: context.route,
    headers: context.headers,
    items: dummyData.length,
    users: dummyData,
  };
});

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
