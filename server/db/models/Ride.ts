import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
  driver: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  timeOfCreation: {
    type: Date,
    required: true,
  },
  rideDepartureTime: {
    type: String,
    required: true,
  },
  rideReturnTime: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  requests: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

const Ride: mongoose.Model<any> = mongoose.model("Ride", RideSchema, "Rides");

export { Ride };
