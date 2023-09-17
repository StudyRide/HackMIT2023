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

router.get("/findRides", (req: Request, res: Response) => {
  const search = req.body.search;
  console.log(search);
  console.log("/findRides called")
  const searchRegex = new RegExp(search, 'i');
  Ride.find({})
    .then((rides) => {
        const foundRides = rides;
        let toReturn: any[] = [];
        foundRides.forEach((ride: any) => {
          // toReturn.push(ride.destination);
          // toReturn.push(ride);
          if (searchRegex.test(ride.destination) ||
              searchRegex.test(ride.origin) ||
              searchRegex.test(ride.driver)) { // Use the regex object to test if the search value matches any substring of the properties
            toReturn.push(ride);
          }
        });
        res.json(toReturn);
    }) 
    .catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred while trying to get rides');
    });
    // console.log(foundRides)
    //console.log(JSON.stringify(foundRides))
});

router.get("/getUserRides", (req: Request, res: Response) => {
  // @ts-ignore
  const search = req.body.search;
  console.log(search);
  console.log("/getUserRides called");
  // @ts-ignore
  const searchRegex = new RegExp(search, 'i');
  Ride.find({})
    .then((rides) => {
        const foundRides = rides;
        let toReturn: any[] = [];
        foundRides.forEach((ride: any) => {
          // toReturn.push(ride.destination);
          // toReturn.push(ride);
          if (searchRegex.test(ride.driver)) { // Use the regex object to test if the search value matches any substring of the properties
            toReturn.push(ride);
          }
        });
        res.json(toReturn);
    }) 
    .catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred while trying to get rides specific to the user');
    });
})
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
  const toAddRides = [
    {"driver":"kate","capacity":3,
    "origin":"new york","destination":"boston","timeOfCreation":"2023-09-17T03:34:24.826Z",
    "rideDepartureTime":"Sat Jan 01 2000 00:00:00 GMT-0500 (Eastern Standard Time)",
    "rideReturnTime":"Sat Jan 01 2000 00:00:00 GMT-0500 (Eastern Standard Time)",
    "cost":5,"requests":[],"__v":0},
    {"driver":"Testing","capacity":2,"origin":"Boston","destination":"Knoxville","timeOfCreation":"2023-09-17T12:51:29.278Z","rideDepartureTime":"10:51","rideReturnTime":"00:51","cost":25,"requests":[],"__v":0}
  ]
  const newUser = new User({
    name: data.name,
    email: data.email,
    phoneNumber: data.phoneNumber,
    password: data.password,
    confirmedRides: toAddRides
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


newRide.save()
    .then(() => res.json('Ride created!'))
    // @ts-ignore
    .catch((err) => res.status(400).json('Error: ' + err));
});

export default router;