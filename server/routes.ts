import express, { Request, Response, Application } from "express";
import { User } from "./db/models/User";
import { Ride } from "./db/models/Ride";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("HackMIT2023, Kate, Daniel, Kristiana, and Muhammad")
});

router.get("/getRides", (req: Request, res: Response) => {
  console.log("/getRides called")
  Ride.find({})
    .then((rides) => {
        res.json(rides);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred while trying to get rides');
    });
});

router.get("/getUsers", (req: Request, res: Response) => {
  User.find({})
    .then((rides) => {
        res.json(rides);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred while trying to get userss');
    });
})

router.post("/createUser", (req: Request, res: Response) => {
  const data = req.body;

  const newUser = new User({
    name: data.name,
    email: data.email,
    phoneNumber: data.phoneNumber,
    password: data.password,
    confirmedRides: []
  });
  newUser.save()
    .then(() => res.json('User created!'))
    // @ts-ignore
    .catch((err) => res.status(400).json('Error: ' + err))
});

router.post("/createRide", (req, res) => {
  const data = req.body;

  const newRide = new Ride({
    driver: data.driver,
    capacity: data.capacity,
    origin: data.origin,
    destination: data.destination,
    timeOfCreation: new Date(),
    rideDepartureTime: data.rideDepartureTime,
    rideReturnTime: data.rideReturnTime,
    cost: data.cost,
    requests: []
});

console.log(JSON.stringify(newRide))

res.json('ride done')

// newRide.save()
//     .then(() => res.json('Ride created!'))
//     // @ts-ignore
//     .catch((err) => res.status(400).json('Error: ' + err));
});

export default router;