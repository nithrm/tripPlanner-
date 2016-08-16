var placeSchema = {};
var placeOptions = {};

var Sequelize = require('sequelize');
var db = require('./_db');


placeSchema.address = {

	type: Sequelize.STRING,
	allowNull: false
};

placeSchema.city = {

	type: Sequelize.STRING,
	allowNull: false
};

placeSchema.state = {

	type: Sequelize.STRING,
	allowNull: false
};

placeSchema.phone = {

	type: Sequelize.STRING,
	allowNull: false
};

placeSchema.location = {

	type: Sequelize.ARRAY(Sequelize.FLOAT),
	allowNull: false
};

var Place = db.define('place', placeSchema, placeOptions);

module.exports = Place;