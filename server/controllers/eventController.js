const model = require("mongoose");
const event = require("../Models");

const eventController = {
  createEvent: (req, res) => {
    console.log("foundz!");
    console.log(req.body);
    // const event = event.createEvent(req.body);
  },
};

module.exports = eventController;
