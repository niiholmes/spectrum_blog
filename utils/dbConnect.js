import mongoose from "mongoose";

export default function dbConnect() {
  const dbURL = process.env.dbURL;
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  mongoose.connect(dbURL,options, () => console.log('up and away'))
}
