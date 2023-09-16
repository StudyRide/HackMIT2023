import express, { Express, Request, Response, Application } from "express";
import mongoose from "mongoose";
import { User } from "./db/models/User";
import { Ride } from "./db/models/Ride";

const app: Application = express();
const port = process.env.PORT || 8000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to Express & TypeScript Server");
// });

app.post("/create-user", (req: Request, res: Response) => {});

app.get("/", (req: Request, res: Response) => {
  console.log("Started definitely");
  const allRides = Ride.find();
  res.send({
    allRides: allRides,
  });
});

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

console.log(
  User.create({
    email: "hi@gmail.com",
    name: "thisIsAName",
    phoneNumber: "123.456.7890",
  }).then((res) => {
    res;
  }),

  User.find({})
    .exec()
    .then((res) => {
      console.log(res);
    })
);
