import express from "express";
import cors from "cors";
import firebaseConfig from "./data-source";
import productRoute from "./routes/products.routes";

const firebase = require("firebase");
const app = express();

const PORT = 3000;

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

app.use(express.json());
app.use(cors());

app.use("/produtos", productRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
