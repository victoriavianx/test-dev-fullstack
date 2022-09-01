import express from "express";
import cors from "cors";
import firebase from "firebase";

import firebaseConfig from "./data-source";

import productRoute from "./routes/products.routes";

import appErrorMiddleware from "./middlewares/handleAppError.middleware";

const app = express();

const PORT = 3000;

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

app.use(express.json());
app.use(cors());

app.use(appErrorMiddleware);
app.use("/produtos", productRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
