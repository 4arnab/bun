import { Elysia, type Context } from "elysia";

export const useLogger = (app: Elysia) => {
  app.onBeforeHandle(async (c: Context) => {
    console.log(`[${c.request.method}] ${c.request.url} - ${c.set.status}`);
  });
};
