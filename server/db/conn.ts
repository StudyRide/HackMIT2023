const mongoose = require("mongoose");

const DATABASE_URL =
  "mongodb+srv://HackMIT2023:WCtlrWURq9DzZna7@hackmit-cluster.4p9wi1v.mongodb.net/?retryWrites=true&w=majority";

const ConnectDB = () => {
  //@ts-ignore
  await mongoose
    .connect(DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err: any) => console.log(er));
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection failed"));

module.exports = ConnectDB;
