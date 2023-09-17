import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true
  },
  confirmedRides: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

const User: mongoose.Model<any> = mongoose.model("User", UserSchema, "Users");

export { User };
