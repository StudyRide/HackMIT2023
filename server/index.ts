import express, { Express, Request, Response, Application } from "express";
import mongoose from "mongoose";
import { User } from "./db/models/User";

const app: Application = express();
const port = process.env.PORT || 8000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to Express & TypeScript Server");
// });

app.post("/create-user", (req: Request, res: Response) => {});

const connString =
  "mongodb+srv://HackMIT2023:pGnJYUneesMv2oKw@hackmit-cluster.4p9wi1v.mongodb.net/?retryWrites=true&w=majority";

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

console.log(User.findAll());
