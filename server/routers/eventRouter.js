const express = require("express");

const EventController = require("../controllers/eventController");
const { mode } = require("../../webpack.config");

const router = express.Router();

router.post("/", EventController.createEvent, (req, res) => {
  res.status(200);
});

module.exports = router;
