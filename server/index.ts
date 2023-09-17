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
  res.send(
    "Good evening!"
  );
});

app.get('/getRides', (req: Request, res: Response) => {
  Ride.find({})
    .then((rides) => {
        res.json(rides);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred while trying to get rides');
    });
});

app.get('/getUsers', (req: Request, res: Response) => {
  User.find({})
    .then((rides) => {
        res.json(rides);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred while trying to get userss');
    });
})

app.post('/createRide', (req, res) => {
  const newRide = new Ride({
      driver: req.body.driver,
      capacity: req.body.capacity,
      origin: req.body.origin,
      destination: req.body.destination,
      timeOfCreation: new Date(),
      rideDepartureTime: req.body.rideDepartureTime,
      rideReturnTime: req.body.rideReturnTime,
      cost: req.body.cost,
      requests: []
  });
  newRide.save()
      .then(() => res.json('Ride created!'))
      // @ts-ignore
      .catch((err) => res.status(400).json('Error: ' + err));
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
