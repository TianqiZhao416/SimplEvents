const path = require("path");
const express = require("express");

const app = express();

// const fileController = require("./controllers/fileController");

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
// app.use(express.static(path.resolve(__dirname, "client")));

// respond with main app
app.get("/", (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"))
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  //overrireds default and adds extra info
  const errorObj = Object.assign(defaultErr, err);
  // console.log(errorObj.log);
  // we're going to return the response
  // but first call on it status (passing in the error object's status)
  // and then calling the json method of the Response object (passing n the default error's message)
  //
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// app.get("/");

module.exports = app;
