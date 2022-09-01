import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const appErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal Server Error",
    stack: err.stack,
  });
};

export default appErrorMiddleware;
