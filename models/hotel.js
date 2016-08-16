var Sequelize = require('sequelize');
var db = require('./_db');

var hotelSchema = {};
var hotelOptions = {};


hotelSchema.name = {

	type: Sequelize.STRING,
	allowNull: false
};

hotelSchema.num_stars = {

	type: Sequelize.INTEGER,
	allowNull: false,
	validate: {
		min: 1,
		max: 5
	}
};

hotelSchema.amenities = {

	type: Sequelize.STRING,
	allowNull: false,
};

var Hotel = db.define('hotel', hotelSchema, hotelOptions);

module.exports = Hotel;