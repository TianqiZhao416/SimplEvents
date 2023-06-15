const express = require("express");

const EventController = require("../controllers/eventController");
const { mode } = require("../../webpack.config");

const router = express.Router();

router.post("/", EventController.createEvent, (req, res) => {
  res.status(200).json(res.locals.newEvent);
});

router.get("/", EventController.getDayEvent, (req, res) => {
  res.status(200).json(res.locals.eventsOfTheDay);
});

router.delete("/", EventController.deleteAll, (req, res) => {
  res.status(200).json(res.locals.eventsOfTheDay);
});

module.exports = router;
