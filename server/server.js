const path = require("path");
const express = require("express");
const eventController = require("./controllers/eventController");
const eventRouter = require("./routers/eventRouter");

const app = express();

// const fileController = require("./controllers/fileController");
const mongoose = require("mongoose");
// const EventController = require("./controllers/eventController");

//passwd:

const MONGO_URI =
  "mongodb+srv://dzhao1880:3HZbYCTi4I8TjEQC@eventcluster.gmdo16b.mongodb.net/?retryWrites=true&w=majority";

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// respond with main app
app.get("/", (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"))
);

app.use("/event", eventRouter);

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: "Express error handler caught unknown middleware error",
//     status: 400,
//     message: { err: "An error occurred" },
//   };
//   //overrireds default and adds extra info
//   const errorObj = Object.assign(defaultErr, err);
//   // console.log(errorObj.log);
//   // we're going to return the response
//   // but first call on it status (passing in the error object's status)
//   // and then calling the json method of the Response object (passing n the default error's message)
//   //
//   return res.status(errorObj.status).json(errorObj.message);
// });

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "events",
  })
  .then(() => {
    console.log("Connected to Mongo DB.");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
// app.get("/");

module.exports = app;
