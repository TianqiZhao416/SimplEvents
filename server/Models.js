const mongoose = require("mongoose");
const { Schema } = mongoose;
// import { Schema } from "webpack-dev-server";

const daySchema = new Schema({
  day: String,
  // even
});

const eventSchema = new Schema({
  day: String,
  description: String,
});

const Event = mongoose.model("event", eventSchema);

module.export = Event;
