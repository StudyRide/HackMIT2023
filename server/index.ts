import express, { Express, Request, Response, Application } from "express";
import mongoose from "mongoose";
import { User } from "./db/models/User";
import { Ride } from "./db/models/Ride";
import router from "./routes";

const cors = require("cors");
var bodyParser = require("body-parser");

const app: Application = express();
const port = process.env.PORT || 4242;

app.use(cors());
app.use(bodyParser.json());

const connString =
  "mongodb+srv://ebondare:eZWqUiDAyhltnqfC@studyride-cluster.c55hbb6.mongodb.net/";

//eZWqUiDAyhltnqfC
app.use("/", router);

const start = async () => {
  try {
    await mongoose.connect(connString);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
