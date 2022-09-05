import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import firebase from "firebase";
import firebaseConfig from "./data-source";
import productRoute from "./routes/products.routes";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";

const app = express();

const PORT = 3001;

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE");

  app.use(cors());

  next();
});

app.use("/produtos", productRoute);

app.use(handleAppErrorMiddleware);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
