const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// import { Schema } from "webpack-dev-server";

const eventSchema = new Schema({
  day: String,
  // time: time,
  description: String,
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
