import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  confirmedRides: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

const User = mongoose.model("User", UserSchema, "Users");

export { User };
