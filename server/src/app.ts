import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import firebase from "firebase";
import firebaseConfig from "./data-source";
import productRoute from "./routes/products.routes";

const app = express();

const PORT = 3000;

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

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
