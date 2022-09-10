import cors from "cors";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import firebase from "firebase";
import firebaseConfig from "./data-source";
import productRoute from "./routes/products.routes";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";

const app = express();

const PORT = 3001;

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

app.use(express.json());

app.options("*", cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");

  app.use(cors());

  next();
});

app.use("/produtos", productRoute);

app.use(handleAppErrorMiddleware);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
