const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
	eventName: { type: String, required: true },
	eventDisc: { type: String, required: true },
	startingTime: { type: String, required: true },
	endingTime: { type: String, required: true },
});

const Event = mongoose.model("evnet",eventSchema);

module.exports = {Event};