import { Request, Response, NextFunction } from "express";

const schemaValidation =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, { abortEarly: false });
      req.body = validated;

      next();
    } catch (error: any) {
      return res.status(400).json({
        message: error.error.join(", "),
      });
    }
  };

export default schemaValidation;
