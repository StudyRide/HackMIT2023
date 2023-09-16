const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
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
    type: Date,
    required: true,
  },
  rideReturnTime: {
    type: Date,
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
