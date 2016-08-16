var Sequelize = require('sequelize');
var db = require('./_db');

var restaurantSchema = {};
var restaurantOptions = {};


restaurantSchema.name = {

	type: Sequelize.STRING,
	allowNull: false
}

restaurantSchema.cuisine = {

	type: Sequelize.STRING,
	allowNull: false
}

restaurantSchema.price = {

	type: Sequelize.INTEGER,
	allowNull: false,
	validate: {
		min: 1,
		max: 5
	}
}

var Restaurant = db.define('restaurant', restaurantSchema, restaurantOptions);

module.exports = Restaurant;