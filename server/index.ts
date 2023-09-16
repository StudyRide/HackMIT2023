import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// const ConnectDB = require("./db/conn");

// import db from "./db/conn";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

const connString =
  "mongodb+srv://HackMIT2023:2a9xIW3TbzYUFcxk@hackmit-cluster.4p9wi1v.mongodb.net/?retryWrites=true&w=majority";

async function ConnectDb() {
  await mongoose.connect(connString);
}

const start = async () => {
  try {
    await mongoose.connect(connString);
    app.listen(port, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
// app.listen(port, () => {
//   console.log(`Server is Fire at http://localhost:${port}`);
// });
