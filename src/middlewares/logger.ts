import { Elysia, type Context } from "elysia";

export const logger = new Elysia().onBeforeHandle(async (context: Context, next) => {
  const start = Date.now();

  await next();

  const end = Date.now();
  const { method, url } = context.request;

  console.log(
    `[${new Date().toLocaleString()}] ${method} ${url} -> (${end - start}ms)`
  );
});
