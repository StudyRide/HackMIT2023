import express, { Express, Request, Response, Application } from "express";
import mongoose from "mongoose";
import { User } from "./db/models/User";
import { Ride } from "./db/models/Ride";

const app: Application = express();
const port = process.env.PORT || 4242;

const connString =
  "mongodb+srv://ebondare:eZWqUiDAyhltnqfC@studyride-cluster.c55hbb6.mongodb.net/";

//eZWqUiDAyhltnqfC

app.post("/createUser", (req: Request, res: Response) => {
  console.log(req.query);
  const newUser = new User({
    name: req.query.name,
    email: req.query.email,
    phoneNumber: req.query.phoneNumber,
    confirmedRides: []
  });
  newUser.save()
    .then(() => res.json('User created!'))
    // @ts-ignore
    .catch((err) => res.status(400).json('Error: ' + err))
});

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
        res.status(500).send('An error occurred while trying to get users');
    });
})


app.post('/createRide', (req, res) => {
  const newRide = new Ride({
      driver: req.query.driver,
      capacity: req.query.capacity,
      origin: req.query.origin,
      destination: req.query.destination,
      timeOfCreation: new Date(),
      rideDepartureTime: req.query.rideDepartureTime,
      rideReturnTime: req.query.rideReturnTime,
      cost: req.query.cost,
      requests: []
  });
  newRide.save()
      .then(() => res.json('Ride created!'))
      // @ts-ignore
      .catch((err) => res.status(400).json('Error: ' + err));
});


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

// console.log(
//   User.create({
//     email: "hi@gmail.com",
//     name: "thisIsAName",
//     phoneNumber: "123.456.7890",
//   }).then((res) => {
//     res;
//   }),

//   User.find({})
//     .exec()
//     .then((res) => {
//       console.log(res);
//     })
// );
