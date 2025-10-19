import { Elysia, NotFoundError, ValidationError } from "elysia";

// THIS ERROR HANDLER TAKES ELYSIA APP AS AN PARAM
export const userErrorHandler = (app: Elysia) =>
  app.onError(({ error, status, path, request }) => {
    let message;
    switch (true) {
      case error instanceof NotFoundError:
        message = error.message || "Resource not found";
        break;
      case error instanceof ValidationError:
        message = error.message || "Invalid input data";
        break;
      case error instanceof Error:
        message = error.message;
        break;
      case typeof error === "string":
        message = error;
        break;

      default:
        message = "UNKNOWN-ERROR";
    }

    console.error(`🔥 [${status}] Error on ${request.method} ${request.url}`);

    return {
      success: false,
      message,
      error,
      status,
      path,
    };
  });
