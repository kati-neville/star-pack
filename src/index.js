var starNames = require("./names.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
	all: starNames,
	random: uniqueRandomArray(starNames),
};
