const model = require("mongoose");
const event = require("../Models");

const eventController = {
  createEvent: async (req, res, next) => {
    try {
      console.log("foundz!");
      console.log(req.body);

      const newEvent = await event.create({ ...req.body });
      res.locals.newEvent = newEvent;
      return next();
    } catch (error) {
      error = {
        err: "failed to create a event",
      };
      return next(error);
    }
  },

  getDayEvent: async (req, res, next) => {
    try {
      // console.log("trying to get", req.headers.day);
      // console.log(req.headers.day);
      const eventsDay = await event.find({ day: req.headers.day });
      // console.log("getting days", eventsDay);
      res.locals.eventsOfTheDay = eventsDay;
      return next();
    } catch (error) {
      error = {
        err: "couldnt grab day events",
      };
    }
  },

  deleteAll: async (req, res, next) => {
    try {
      const eventsDay = await event.deleteMany();
      res.locals.eventsDeleted = eventsDay;
      return next();
    } catch (error) {
      error = {
        err: "couldnt delete",
      };
    }
  },
};

module.exports = eventController;
